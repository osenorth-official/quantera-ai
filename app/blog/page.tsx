"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import theme from "@/theme/theme";
import BlogCards from "@/components/blogCards";
import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Blog() {
  const supabase = createClientComponentClient();
  const [blogsList, setBlogsList] = useState([] as any);
  const blogsAr = [
    {
      title: "Twitter's rebrand has got a lot more to do with X",
      sequence: 1,
      date: "5th November",
      image: "/24c2337e-6b18-4702-be69-6f5a968e95ed.png",
    },
    {
      title: "Global market trends are signallying this in 6 months",
      sequence: 2,
      date: "14th October",
      image: "/24c2337e-6b18-4702-be69-6f5a968e95ed-1.png",
    },
    {
      title: "What does it mean to have a yield curve flip",
      sequence: 3,
      date: "23rd September",
      image: "/24c2337e-6b18-4702-be69-6f5a968e95ed-3.png",
    },
    {
      title: "Real estate pricing has plateaued, here is what's next",
      sequence: 4,
      date: "14th October",
      image: "/24c2337e-6b18-4702-be69-6f5a968e95ed-5.png",
    },
  ];

  useEffect(() => {
    supabase
      .from("blogs")
      .select()
      .then(({ data, error }) => setBlogsList(data));
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Navbar currRef={undefined} />
      <Box sx={{ display: "flex", minHeight: "80vh", minWidth: "100vw" }}>
        <Grid container spacing={1} sx={{ mt: 10 }}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: "3.75rem",
                fontWeight: 700,
              }}
            >
              Insights Blog
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: "1.5rem",
                fontWeight: 600,
              }}
            >
              250 word essays on market insights
            </Typography>
          </Grid>
          <Grid container item xs={12} sx={{ ml: "18%", mt: 10 }}>
            {blogsList?.map((item: any, index: number) => (
              <Grid item xs={5} key={index} sx={{ mt: 5 }}>
                <BlogCards item={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
