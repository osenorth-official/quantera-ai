"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/theme";
import Navbar from "@/components/navbar";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Footer from "@/components/footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import moment from "moment";
import RecommendedBlogCards from "@/components/recommendedBlogCard";

interface Props {
  heading: string;
  created_at: string;
  cover: string;
  content: string;
}

export default function BlogPage(props: any) {
  const [blogDet, setBlogDet] = useState<Props>({
    heading: "",
    created_at: "",
    cover: "",
    content: "",
  });
  const imgUrl =
    "https://yjasfeanlannyjroczqf.supabase.co/storage/v1/object/public/blog-images/";

  useEffect(() => {
    setBlogDet(props.searchParams as Props);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Navbar currRef={undefined} />
      <Box sx={{ display: "flex", minHeight: "80vh", minWidth: "100vw" }}>
        <Grid container spacing={1} sx={{ mt: 10 }}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h2" sx={{ fontWeight: 700, fontSize: "3rem" }}>
              {blogDet.heading}
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
              {moment(blogDet.created_at, "", true).format("Do MMMM")}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center", mt: 2 }}
          >
            {blogDet.cover ? (
              <Image
                src={imgUrl + blogDet.cover?.replace(" ", "%20")}
                alt="banner"
                height={700}
                width={800}
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
              {blogDet.content}
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
             <Typography variant="h2" sx={{ fontWeight: 700, fontSize: "3rem" }} align={"center"}>Short reads for market insights and macro trends</Typography>
          </Grid>
            <Grid item xs={7} sx={{
              display: "flex",
              justifyContent: "center",
              mr: "auto",
              ml: "auto",
              mt: 2,
            }}>
              <Stack direction={"row"} spacing={6}>
              <RecommendedBlogCards/>
              <RecommendedBlogCards/>
              </Stack>
            </Grid>
        </Grid>
        
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
