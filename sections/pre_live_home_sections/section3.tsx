import { Typography, Grid } from "@mui/material";
import Image from "next/image";

export default function Section3() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ mt: 10 }}>
        <Typography variant="h3" align="center">
          Discover our powerful features.
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 3 }}>
          Lorem Ipsum.
        </Typography>
      </Grid>
      <Grid container item xs={12} sx={{ mt: 2, ml: "2%" }}>
        <Grid item xs={3}>
          <Image src="/Group 9.png" alt="banner" height={350} width={300} />
        </Grid>
        <Grid item xs={3} sx={{ mt: 3 }}>
          <Image src="/Inbox.png" alt="banner" height={350} width={300} />
        </Grid>
        <Grid item xs={3} sx={{ mt: 5 }}>
          <Image
            src="/Dropdown with Search.png"
            alt="banner"
            height={350}
            width={300}
          />
        </Grid>
        <Grid item xs={3}>
          <Image
            src="/REVENUE CHART.png"
            alt="banner"
            height={350}
            width={350}
          />
        </Grid>
        <Grid item xs={4}>
          <Image
            src="/REVENUE CHART-2.png"
            alt="banner"
            height={350}
            width={350}
          />
        </Grid>
        <Grid item xs={4} sx={{ mt: 13 }}>
          <Image src="/Top Content.png" alt="banner" height={350} width={400} />
        </Grid>
        <Grid item xs={4}>
          <Image
            src="/Historical Graph.png"
            alt="banner"
            height={350}
            width={350}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
