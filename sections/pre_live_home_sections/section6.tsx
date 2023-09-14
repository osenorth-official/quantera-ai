import { Grid, Typography } from "@mui/material";

export default function Section6() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ mt: 10 }}>
        <Typography variant="h3" align="center">
          What people say about us
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 5 }}>
        <Typography variant="body1" align="center">
          See how our users get the most out of our platform.
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 10 }}>
        <Typography variant="h3" align="center">
          There is something for <br /><span style={{ backgroundColor: "black", color: "white", marginTop: 4 }}> everyone.</span>
        </Typography>
      </Grid>
    </Grid>
  );
}
