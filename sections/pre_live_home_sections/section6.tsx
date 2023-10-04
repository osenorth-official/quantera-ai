import { Grid, Typography, Stack, useMediaQuery, useTheme } from "@mui/material";
import ReviewCard from "@/components/reviewCard";

export default function Section6({ currRef }: { currRef: any }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Define the number of columns for different screen sizes
  const columnCount = isDesktop ? 4 : 3; // Change the number of columns as needed

  // Calculate the number of cards for each row
  const cardsPerRow = [4, 3, 2];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ mt: 10 }}>
        <Typography variant="h3" align="center" sx={{ fontSize: isMobile ? "3rem" : "4.125rem", fontWeight: 900 }}>
          What people say about us
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 1 }}>
      <Typography variant="body1" align="center" sx={{ fontSize: isMobile ? "1rem" : "1.125rem", fontWeight: 600, }}>
          See how our users get the most out of our platform.
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 3 }}>
  <Stack spacing={3} sx={{ mx: "auto", maxWidth: "90%", ml: { xs: 0.2, sm: 6} }}>
    {cardsPerRow.map((rowCards, rowIndex) => (
      <Grid key={rowIndex} container spacing={2} justifyContent="center">
        {Array.from({ length: rowCards }).map((_, index) => (
          <Grid key={index} item xs={12} sm={6} md={3} style={{paddingTop:"0px"}}>
            <ReviewCard />
          </Grid>
        ))}
      </Grid>
    ))}
  </Stack>
</Grid>

      <Grid item xs={12} sx={{ mt: 10 }} ref={currRef}>
        <Typography variant="h3" align="center" sx={{ fontSize: isMobile ? "3rem" : "4.125rem", fontWeight: 900 }}>
          There is something for <br />
          <span style={{ backgroundColor: "black", color: "white", display: "inline-block", padding: "0.5rem" }}>
            everyone.
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
}

