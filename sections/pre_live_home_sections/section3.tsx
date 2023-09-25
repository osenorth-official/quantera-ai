import { Typography, Grid } from "@mui/material";
import Image from "next/image";

export default function Section3(props: any) {
  return (
    <Grid container spacing={2} >
      <Grid item xs={12} sx={{ mt: 10 }} ref={props.featureRef}>
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
        <Image src="/Group_37.png" width={1600} height={800} alt="Image"/>
      </Grid>
    </Grid>
  );
}
