import { Grid, Typography, Stack, useMediaQuery } from "@mui/material";
import Image from "next/image";
import CustomCard from "@/components/card";

export default function Section2() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          sx={{ mt: 10 }}
          color={"#D8D8D8"}
          align="center"
          fontSize="1.2rem"
        >
          In partnership with
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={isMobile ? 2 : 20}
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 4, mb: 4 }}
        >
          <Image
            src="/Bitmap1111.svg"
            alt="banner"
            height={30}
            width={200}
            style={{ filter: "grayscale(100%)" }}
          />

          <Image
            src="/Bitmap1.svg"
            alt="banner"
            height={20}
            width={50}
            style={{ filter: "grayscale(100%)" }}
          />
          <Image
            src="/Bitmap111.svg"
            alt="banner"
            height={40}
            width={150}
            style={{ filter: "grayscale(100%)" }}
          />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Typography
          sx={{ mt: 4 }}
          color={"black"}
          align="center"
          style={{ fontWeight: 600 }}
        >
          It’s always 2 clicks away! Data visualization and stock insights
          company is shaping how <br />
          investors can get the most by saving them time.
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 4,}}>
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={isMobile ? 2 : 10}
          alignItems="center"
          justifyContent="center"
          marginBottom="5rem"
        >
          <CustomCard>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" >
              <Typography variant="h2" sx={{ fontWeight: "900", fontSize: "3.5rem" }}>
                2
              </Typography>
              <Image
                src="/click-tap-svg.svg"
                alt="banner"
                height={20}
                width={60}
              />
            </Stack>
            <Typography variant="body1" align="center" sx={{ fontWeight: 550, fontSize: "1.5rem" }}>Clicks away are all<br /> your answers.</Typography>
          </CustomCard>
          <CustomCard>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-around" >
              <Typography variant="h2" sx={{ fontWeight: "900", fontSize: "3.5rem" }}>
                2385
              </Typography>
              <Image
                src="/Group 8-svg.svg"
                alt="banner"
                height={15}
                width={45}
              />
            </Stack>
            <Typography variant="body1" align="center" sx={{ fontWeight: 550, fontSize: "1.5rem" }}>Publicly traded<br /> companies.</Typography>
          </CustomCard>
          <CustomCard >
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-around" >
              <Typography variant="h2" sx={{ fontWeight: "900", fontSize: "3.5rem" }}>
                8x
              </Typography>
              <Image
                src="/cube-five-svg.svg"
                alt="banner"
                height={20}
                width={60}
              />
            </Stack>
            <Typography variant="body1" align="center" sx={{ fontWeight: 550, fontSize: "1.5rem" }}>Speed up your research<br /> by many folds.</Typography>
          </CustomCard>
        </Stack>
      </Grid>
      <Grid item xs={12} sx={{ bgcolor: 'black', pb: isMobile ? "1rem" : "3.5rem", pt: "3.5rem" }}>
        <Typography variant="h3" align="center" marginTop="2rem" sx={{ color: "white", fontSize: isMobile ? "2rem" : "3rem", fontWeight: 600 }}>
          "This tool is going to level the finance space for <br /> everyone."
        </Typography>
        <Typography variant="body1" align="right" marginRight="3rem" sx={{ color: "white", fontSize: isMobile ? "0.8rem" : "1.175rem", fontWeight: 550 }}>
          - private equity advisor
        </Typography>
      </Grid>
    </Grid>
  );
}
