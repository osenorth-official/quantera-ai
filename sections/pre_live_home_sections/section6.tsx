import { Grid, Typography, Stack, Rating, Avatar } from "@mui/material";
import ReviewCard from "@/components/reviewCard";

export default function Section6() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ mt: 10 }}>
        <Typography variant="h3" align="center" sx={{ fontSize: "5.125rem", fontWeight: 900}}>
          What people say about us
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 1 }}>
        <Typography variant="body1" align="center" sx={{ fontSize: "1.5rem", fontWeight: 600}}>
          See how our users get the most out of our platform.
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 10, mr: "2%" }}>
        <Stack direction="row" spacing={1}>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </Stack>
      </Grid>
      <Grid item xs={12} sx={{ mt: 3 }}>
        <Stack direction="row" spacing={1} sx={{ml: "10%", mr: "10%"}}>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </Stack>
      </Grid>
      <Grid item xs={12} sx={{ mt: 10 }}>
        <Typography variant="h3" align="center" sx={{ fontSize: "5.125rem", fontWeight: 900}}>
          There is something for <br />
          <span
            style={{ backgroundColor: "black", color: "white", marginTop: 4 }}
          >
            everyone.
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
}
