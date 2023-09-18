import { Typography, Grid } from "@mui/material";
import Image from "next/image";

export default function Section3() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ mt: 10 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontSize: "5.125rem", fontWeight: 900 }}
        >
          Discover our powerful features.
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 3 }}>
          Lorem Ipsum.
        </Typography>
      </Grid>
      <Grid container item xs={12} sx={{ mt: 2, ml: "2%" }}>
        <Grid item xs={3}>
          <Image src="/Group 9.svg" alt="banner" height={350} width={350} />
        </Grid>
        <Grid item xs={3} sx={{ mt: 3 }}>
          <Image src="/Inbox.svg" alt="banner" height={350} width={350} />
        </Grid>
        <Grid item xs={3} sx={{ mt: 5 }}>
          <Image
            src="/Dropdown with Search.svg"
            alt="banner"
            height={350}
            width={350}
          />
        </Grid>
        <Grid item xs={3}>
          <Image
            src="/REVENUE CHART.svg"
            alt="banner"
            height={350}
            width={350}
          />
        </Grid>
        <Grid item xs={3.5}>
          <Image
            src="/REVENUE CHART-1.svg"
            alt="banner"
            height={350}
            width={450}
          />
        </Grid>
        <Grid item xs={5} sx={{ mt: 13 }}>
          <Image src="/Top Content.svg" alt="banner" height={400} width={600} />
        </Grid>
        <Grid item xs={3.5}>
          <Image
            src="/Historical Graph.svg"
            alt="banner"
            height={400}
            width={450}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
