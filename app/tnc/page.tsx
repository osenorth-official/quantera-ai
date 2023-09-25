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
            <Typography
              variant="h2"
              sx={{ fontWeight: 700, fontSize: "3.125 rem" }}
              align="center"
            >
              Terms and conditions
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", ml: "20%", pr: "20%" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, fontSize: "3.15 rem" }}
              align="center"
            >
              <p>
                {" "}
                Quantera AI is build to provide investors with the most accurate
                information available to make informed decisions for education
                purposes only.{" "}
              </p>{" "}
              <p>
                Please do not rely on Quanter AI for financial advise. Always do
                your own due diligence.
              </p>{" "}
              <p>
                {" "}
                Nothing on Quantera AI is{" "}
                <span
                  style={{
                    color: "#6787E7",

                    textDecoration: "underline",
                  }}
                >
                  a recommendation to buy or sell securities.
                </span>
              </p>{" "}
              <p
                style={{
                  color: "#6787E7",

                  textDecoration: "underline",
                }}
              >
                {" "}
                If you have any questions, please contact us.
              </p>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
