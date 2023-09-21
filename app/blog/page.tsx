"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import theme from "@/theme/theme";

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar currRef={undefined} />
      <Box sx={{ display: "flex", minHeight: "80vh", minWidth: "100vw" }}>
        <Grid container spacing={1} sx={{ mt: 10 }}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center"  }} >
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
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center"  }}>
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
        </Grid>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
