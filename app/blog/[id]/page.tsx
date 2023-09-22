"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/theme";
import Navbar from "@/components/navbar";
import { Box, Grid, Typography } from "@mui/material";
import Footer from "@/components/footer";
import Image from "next/image";

export default function BlogPage() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar currRef={undefined} />
      <Box sx={{ display: "flex", minHeight: "80vh", minWidth: "100vw" }}>
        <Grid container spacing={1} sx={{ mt: 10 }}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h2" sx={{ fontWeight: 700, fontSize: "3rem" }}>
              What does it mean to <br />
              have a yield curve flip
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: 500, fontSize: "0.75rem" }}
            >
              23rd September
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Image
              src="/24c2337e-6b18-4702-be69-6f5a968e95ed-3.png"
              alt="banner"
              height={700}
              width={800}
            />
          </Grid>
          <Grid item xs={7} sx={{ display: "flex", justifyContent: "center",mr: "auto", ml:"auto", mt: 2  }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: "1.5rem" }}
              align="left"
            >
              The yield curve is a graph that shows the interest rates on bonds
              of different maturities. Normally, the yield curve slopes upward,
              meaning that short-term bonds have lower yields than long-term
              bonds. This is because investors are willing to accept a lower
              yield on a short-term bond in exchange for the liquidity and
              safety of being able to redeem the bond early.<br/> However, when the
              yield curve inverts, it means that short-term bonds have higher
              yields than long-term bonds. This is a rare occurrence and is
              often seen as a signal that a recession is on the horizon.<br/>  There
              are a few reasons why the yield curve might invert. One reason is
              that investors are expecting interest rates to fall in the future.
              This could happen if the economy is slowing down or if the central
              bank is taking steps to stimulate the economy. Another reason is
              that investors are becoming more risk-averse and are therefore
              demanding higher yields on long-term bonds.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
