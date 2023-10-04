"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/theme";
import Navbar from "@/components/navbar";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Footer from "@/components/footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import moment from "moment";
import RecommendedBlogCards from "@/components/recommendedBlogCard";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Footermobile from "@/components/footermobile";

interface Props {
  heading: string;
  created_at: string;
  cover: string;
  content: string;
  linked_blogs_id: string;
}

export default function BlogPage(props: any) {
  const [blogDet, setBlogDet] = useState({} as any);
  const supabase = createClientComponentClient();
  const isMobile = useMediaQuery("(max-width: 600px)");
  
  const imgUrl =
    "https://yjasfeanlannyjroczqf.supabase.co/storage/v1/object/public/blog-images/";

  useEffect(() => {
    console.log(props.searchParams)
    const temp = props.searchParams
    // setBlogDet(temp as Props);
    supabase
      .from("blogs")
      .select()
      .eq("id", +temp.id)
      .then(({ data, error }) => setBlogDet(data as any));
    
  }, []);
  return (
     <ThemeProvider theme={theme}>
  <Navbar currRef={undefined} />
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "80vh",
      minWidth: "100vw",
      alignItems: "center", // Center items horizontally
      justifyContent: "center", // Center items vertically
      textAlign: "center", // Center text content
    }}
  >
        <Grid container spacing={1} sx={{ mt: 10 }}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h2" sx={{ fontWeight: 700, fontSize: "3rem" }}>
              {blogDet?.length > 0 ? blogDet[0].heading: ""}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center", mt: 2 }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: 500, fontSize: "0.75rem" }}
            >
              {moment(blogDet?.length ? blogDet[0].created_at: "", "", true).format("Do MMMM")}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center", mt: 2 }}
          >
            {blogDet?.length ? (
              <Image
                src={imgUrl + blogDet[0].cover?.replace(" ", "%20")}
                alt="banner"
                height={700}
                width={800}
                style={{maxWidth: isMobile ? "80vw" : "100vw"}}
              />
            ) : null}
          </Grid>
          <Grid
            item
            xs={7}
            sx={{
              display: "flex",
              justifyContent: "center",
              mr: "auto",
              ml: "auto",
              mt: 2,
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: "1.5rem" }}
              align="left"
            >
              {blogDet?.length ? blogDet[0].content: ""}
            </Typography>
          </Grid>
          <Grid
            item
            xs={7}
            sx={{
              display: "flex",
              justifyContent: "center",
              mr: "auto",
              ml: "auto",
              mt: 2,
            }}
          >
            <Typography
              variant="h2"
              sx={{ fontWeight: 700, fontSize: isMobile ? "2rem" : "3rem" }}
              align={"center"}
            >
              Short reads for market insights and macro trends
            </Typography>
          </Grid>
          <Grid
            item
            xs={7}
            sx={{
              display: "flex",
              justifyContent: "center",
              mr: "auto",
              ml: "auto",
              mt: 2,
            }}
          >
            <Stack direction={isMobile ? "column" : "row"} style={{display: 'flex', alignItems: 'center', marginBottom: isMobile ?'5rem' : '0'}} spacing={6}>
              {blogDet?.length > 0 ? (
                JSON.parse(blogDet[0].linked_blogs_id).map((item: any, index: number) =>  <RecommendedBlogCards key={index} blog={item}/>)
              ) : null}
            </Stack>
          </Grid>
        </Grid>
      </Box>
      {isMobile ? <Footermobile /> : <Footer />}
    </ThemeProvider>
  );
}
