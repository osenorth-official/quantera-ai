import { CardContent, Card, Grid, Typography, Avatar, Rating } from "@mui/material";

export default function ReviewCard() {
  return (
    <Card
      variant="outlined"
      style={{ marginLeft: "1%", borderColor: "black", maxWidth: 450, borderWidth:3, borderRadius: 8 }}
    >
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Avatar
              alt="Remy Sharp"
              src="/avatar_25.jpg"
              sx={{ width: 34, height: 34, mt: "70%" }}
            />
          </Grid>
          <Grid item xs={10}>
            <Rating
              name="read-only"
              value={5}
              readOnly
              style={{ color: "black", fontSize: 18 }}
            />

            <Typography variant="body1" align="left" sx={{fontSize: "1rem", fontWeight: 600}}>
              The speed at which we are able <br />
              to answer market related questions has been never seen <br />{" "}
              before.
            </Typography>
            <Typography variant="caption" style={{ color: "#5C7C6F", fontSize: "0.75rem", fontWeight: 600 }}>
              Investment Fund Manager
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
