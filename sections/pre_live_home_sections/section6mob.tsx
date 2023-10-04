import React from "react";
import { Grid, Typography, Stack, useMediaQuery, useTheme } from "@mui/material";
import ReviewCard from "@/components/reviewCard";

export default function Section6mob({ currRef }: { currRef: any }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Calculate the number of cards for each row
  const cardsPerRow = isMobile ? 5 : 3; // Show 2 cards in mobile, 3 in other views
  const totalCards = 9; // Total number of cards

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ mt: 10 }}>
        <Typography variant="h3" align="center" sx={{ fontSize: isMobile ? "3rem" : "4.125rem", fontWeight: 900 }}>
          What people say about us
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 1 }}>
        <Typography variant="body1" align="center" sx={{ fontSize: isMobile ? "1rem" : "1.125rem", fontWeight: 600 }}>
          See how our users get the most out of our platform.
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 3 }}>
        <Stack spacing={3} sx={{ mx: "auto", maxWidth: "90%", ml: { xs: 0.2, sm: 6 } }}>
          {Array.from({ length: totalCards }).map((_, index) => (
            index < cardsPerRow && (
              <Grid key={index} item xs={12} sm={6} md={3} style={{ paddingTop: "0px",  display: "flex", justifyContent: "center" , justifyItems: "center", marginLeft: '1rem', marginRight:'-1rem'}}>
                <ReviewCard />
              </Grid>
            )
          ))}
        </Stack>
      </Grid>
      <Grid item xs={12} sx={{ mt: 7 }} ref={currRef}>
        <Typography variant="h3" align="center" sx={{ fontSize: isMobile ? "3rem" : "4.125rem", fontWeight: 900, marginTop: '3rem' , marginLeft: '1rem', marginRight: '1rem'}}>
          There is something for <br />
          <span style={{ backgroundColor: "black", color: "white", display: "inline-block", padding: "0.5rem" }}>
            everyone.
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
}
