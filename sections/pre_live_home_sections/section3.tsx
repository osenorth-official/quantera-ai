import { Typography, Grid } from "@mui/material";

export default function Section3() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ mt: 10}}>
        <Typography variant="h3" align="center">
          Discover our powerful features.
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 2}}>
        <Typography variant="body1" align="center">
          Lorem Ipsum.
        </Typography>
      </Grid>
    </Grid>
  );
}
