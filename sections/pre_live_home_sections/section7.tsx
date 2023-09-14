import { Grid, Typography } from "@mui/material";

export default function Section7() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ mt: 10 }}>
        <Typography variant="h3" align="center">
          Are you a professional or a student <br /> looking for bulk licenses?
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 5 }}>
        <Typography variant="body1" align="center">
          Student must be enrolled in a university program and <br /> be able to show proof of enrolment.
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 5 }}>
        <Typography variant="body1" align="center">
          Frequently asked questions?
        </Typography>
      </Grid>
    </Grid>
  );
}
