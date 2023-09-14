import { Grid, Typography } from "@mui/material";

export default function Section5() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ mt: 10 }}>
        <Typography variant="h3" align="left">
          Streamline your workflow
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 5 }}>
        <Typography variant="body1" align="center">
          A platform that will smoothly integrate in your workstream.
        </Typography>
      </Grid>
    </Grid>
  );
}
