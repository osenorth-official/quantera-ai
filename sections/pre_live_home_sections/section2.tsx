import { Grid, Typography, Stack } from "@mui/material";
import Image from "next/image";
import CustomCard from "@/components/card";

export default function Section2() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            sx={{ mt: 6, mb: 0, p: 0 }}
            color={"#D8D8D8"}
            align="center"
          >
            In partnership with
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={20} height={30}>
            <Image
              src="/Bitmap-1.png"
              alt="banner"
              height={50}
              width={200}
              style={{ marginLeft: "20%" }}
            />

            <Image src="/Bitmap-3.png" alt="banner" height={60} width={100} />

            <Image src="/Bitmap-4.png" alt="banner" height={60} width={150} />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ mt: 6, mb: 0, p: 0 }}
            color={"black"}
            align="center"
          >
            It’s always 2 clicks away! Data visualisation and stock insights
            company is shaping how <br />
            investors can get the most by saving them time.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems={"center"} sx={{ml: 20}}>
            <CustomCard>
              <Stack direction="row" spacing={8} sx={{m: 3}}>
                <Typography variant="h2" sx={{ fontWeight: "500" }}>
                  2
                </Typography>
                <Image
                  src="/click-tap.png"
                  alt="banner"
                  height={15}
                  width={60}
                />
              </Stack>
              <Typography variant="body1" align="left" sx={{m: 2}}>Clicks away are all<br /> your answers.</Typography>
            </CustomCard>
            <CustomCard>
            <Stack direction="row" spacing={8} sx={{m: 3}}>
                <Typography variant="h2" sx={{ fontWeight: "500" }}>
                  2385
                </Typography>
                <Image
                  src="/Group 8.png"
                  alt="banner"
                  height={20}
                  width={60}
                />
              </Stack>
              <Typography variant="body1" align="left" sx={{m: 2,}}>Publically traded<br /> companies.</Typography>
            </CustomCard>
            <CustomCard>
            <Stack direction="row" spacing={8} sx={{m: 3}}>
                <Typography variant="h2" sx={{ fontWeight: "500" }}>
                  8x
                </Typography>
                <Image
                  src="/cube-five.png"
                  alt="banner"
                  height={20}
                  width={60}
                />
              </Stack>
              <Typography variant="body1" align="left" sx={{m: 2}}>Speeden your research<br /> by many folds.</Typography>
            </CustomCard>
          </Stack>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: 'black'}}>
          <Typography variant="h3" align="center" style={{color: "white"}}>"This tool is going to level the finance space for <br /> everyone."</Typography>
          <Typography variant="caption" align="right" style={{color: "white", marginLeft: "80%"}}>- private equity advisor</Typography>
        </Grid>
      </Grid>
    </>
  );
}
