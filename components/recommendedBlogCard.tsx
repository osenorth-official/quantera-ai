import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function RecommendedBlogCards() {
  return (
    <Card
      variant="outlined"
      style={{
        marginLeft: "1%",
        borderColor: "black",
        minWidth: 450,
        borderWidth: 3,
        borderRadius: 8,
      }}
      sx={{ boxShadow: 5 }}
    >
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Image
              src="/24c2337e-6b18-4702-be69-6f5a968e95ed-3.png"
              alt="banner"
              height={135}
              width={235}
            />
          </Grid>
          <Grid item xs={6}>
          <Stack direction="column" spacing={2}>
            <Typography
              variant="h2"
              sx={{ fontWeight: 700, fontSize: "1.6rem" }}
            >
              What does it mean to have a yield curve flip
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 500, fontSize: "0.75rem", mr: "auto", color: "#4A4A4A" }}
            >
              12th September
            </Typography>
          </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
