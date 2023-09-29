import { CardContent, Card, Grid, Typography, Avatar, Rating, useMediaQuery, useTheme } from "@mui/material";

export default function ReviewCard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      variant="outlined"
      style={{
        marginLeft: isMobile ? 0 : "1%",
        borderColor: "black",
        maxWidth: isMobile ? "100%" : 400, 
        borderWidth: 3,
        borderRadius: 8,
        marginBottom: isMobile ? "1rem" : 0,
        height: isMobile ? "8rem" : "11rem", 
      
      }}
      sx={{ boxShadow: 5 }}
    >
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Avatar
              alt="Remy Sharp"
              src="/avatar_25.jpg"
              sx={{ width: 34, height: 34, mt: isMobile ? 0 : "50%" }} 
            />
          </Grid>
          <Grid item xs={10}>
            <Rating
              name="read-only"
              value={5}
              readOnly
              style={{ color: "black", fontSize: isMobile ? 16 : 18 }} // Adjust the font size
            />

            <Typography variant="body1" align="left" sx={{ fontSize: isMobile ? "0.575rem" : "0.8rem", fontWeight: 600 }}>
              The speed at which we are able <br />
              to answer market-related questions has been never seen <br />{" "}
              before.
            </Typography>
            <Typography variant="caption" style={{ color: "#5C7C6F", fontSize: "0.55rem", fontWeight: 600 }}>
              Investment Fund Manager
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
