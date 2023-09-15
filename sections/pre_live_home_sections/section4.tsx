import { Grid, Typography } from "@mui/material";
import CardSection4 from "@/components/cardSection4";
import Image from "next/image";

export default function Section4() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ mt: 10,  }}>
        <Typography variant="h3" align="center" sx={{ fontSize: "5.125rem", fontWeight: 900}}>
          ...features that work for you.
        </Typography>
      </Grid>
      <Grid item container xs={12} sx={{ mt: 5, }}>
        <Grid item xs={4}>
          <CardSection4>
            <Image src="/gradient.png" alt="banner" height={50} width={50} style={{ marginBottom: 15}}/>
            <Typography variant="h5" align="left" sx={{ fontSize: "2.25rem", fontWeight: 900}}>
              Compare company <br /> performance
            </Typography>
            <Typography variant="body1" align="left" sx={{ fontSize: "1.25rem", fontWeight: 500}}>
              From any company with another
            </Typography>
          </CardSection4>
        </Grid>
        <Grid item xs={4}>
          <CardSection4>
          <Image src="/gradient.png" alt="banner" height={50} width={50} style={{ marginBottom: 15}}/>
            <Typography variant="h5" align="left" sx={{ fontSize: "2.25rem", fontWeight: 900}}>
              Share reports via <br /> permalink
            </Typography>
            <Typography variant="body1" align="left"  sx={{ fontSize: "1.25rem", fontWeight: 500}}>
              From any company with another
            </Typography>
          </CardSection4>
        </Grid>
        <Grid item xs={4}>
          <CardSection4>
          <Image src="/Group 25.png" alt="banner" height={50} width={50} style={{ marginBottom: 15}}/>
            <Typography variant="h5" align="left" sx={{ fontSize: "2.25rem", fontWeight: 900}}>
              Listen to quaterly <br /> earnings
            </Typography>
            <Typography variant="body1" align="left" sx={{ fontSize: "1.25rem", fontWeight: 500}}>
              Earnings call report from your favorite stocks
            </Typography>
          </CardSection4>
        </Grid>
        <Grid item xs={4}>
          <CardSection4>
          <Image src="/Group 24.png" alt="banner" height={50} width={50} style={{ marginBottom: 15}}/>
            <Typography variant="h5" align="left" sx={{ fontSize: "2.25rem", fontWeight: 900}}>
              Superinvestors and <br /> portfolio tracking
            </Typography>
            <Typography variant="body1" align="left" sx={{ fontSize: "1.25rem", fontWeight: 500}}>
              Earnings call report from your favorite stocks
            </Typography>
          </CardSection4>
        </Grid>
        <Grid item xs={4}>
          <CardSection4>
          <Image src="/Group 22.png" alt="banner" height={50} width={50} style={{ marginBottom: 15}}/>
            <Typography variant="h5" align="left" sx={{ fontSize: "2.25rem", fontWeight: 900}}>
              Full historical <br /> performance
            </Typography>
            <Typography variant="body1" align="left" sx={{ fontSize: "1.25rem", fontWeight: 500}}>
              Earnings call report from your favorite stocks
            </Typography>
          </CardSection4>
        </Grid>
        <Grid item xs={4}>
          <CardSection4>
          <Image src="/Group 26.png" alt="banner" height={50} width={50} style={{ marginBottom: 15}}/>
            <Typography variant="h5" align="left" sx={{ fontSize: "2.25rem", fontWeight: 900}}>
              Straight to inbox
            </Typography>
            <Typography variant="body1" align="left" sx={{ fontSize: "1.25rem", fontWeight: 500}}>
              Earnings call report from your favorite stocks
            </Typography>
          </CardSection4>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ mt: 5 }}>
        <Typography variant="body1" align="center"  sx={{ fontSize: "1.75rem", fontWeight: 900}}>
          ...and much more.
        </Typography>
      </Grid>
    </Grid>
  );
}
