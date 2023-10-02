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
