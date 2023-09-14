import { Grid, Typography } from "@mui/material";

export default function Section4() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ mt: 10 }}>
        <Typography variant="h3" align="center">
          ...features that work for you.
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 5 }}>
        <Typography variant="body1" align="center">
          ...and much more.
        </Typography>
      </Grid>
    </Grid>
  );
}
