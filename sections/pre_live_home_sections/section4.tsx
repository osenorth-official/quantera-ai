import { Grid, Typography, useMediaQuery } from "@mui/material";
import CardSection4 from "@/components/cardSection4";
import Image from "next/image";

export default function Section4() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const gradientText = {
  
   
    fontSize: isMobile ? "3rem" : "4rem",
    fontWeight: 900,
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ mt: 10 }}>
        <Typography variant="h2" align="center"  sx={gradientText}>
          ...features that work for <span style={{background: 'linear-gradient(45deg, #FF6432 , #7B2EFF)',  WebkitBackgroundClip: "text",  color: "transparent",}}>  you.</span>
        </Typography>
      </Grid>
      <Grid item container  alignItems="center" xs={12} sx={{ mt: 5 , marginLeft: { xs: "2rem", sm: "4rem" }, }}>
        <Grid item xs={12} sm={6} md={4}>
          <CardSection4>
            <Image src="/compare.svg" alt="banner" height={50} width={50} style={{ marginBottom: 15 }} />
            <Typography variant="h5" align="left" sx={{ fontSize: "1.5rem", fontWeight: 900 }}>
              Compare company <br /> performance
            </Typography>
            <Typography variant="body1" align="left" sx={{ fontSize: "1rem", fontWeight: 500, color: "#4A4A4A", mt: 1 }}>
              From any company with another
            </Typography>
          </CardSection4>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSection4>
            <Image src="/share-2.svg" alt="banner" height={50} width={50} style={{ marginBottom: 15 }} />
            <Typography variant="h5" align="left" sx={{ fontSize: "1.5rem", fontWeight: 900 }}>
              Share reports via <br /> permalink
            </Typography>
            <Typography variant="body1" align="left" sx={{ fontSize: "1rem", fontWeight: 500, color: "#4A4A4A", mt: 1 }}>
              From any company with another
            </Typography>
          </CardSection4>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSection4>
            <Image src="/volume-2.svg" alt="banner" height={50} width={50} style={{ marginBottom: 15 }} />
            <Typography variant="h5" align="left" sx={{ fontSize: "1.5rem", fontWeight: 900 }}>
              Listen to quaterly <br /> earnings
            </Typography>
            <Typography variant="body1" align="left" sx={{ fontSize: "1rem", fontWeight: 500, color: "#4A4A4A", mt: 1 }}>
                Earnings call report from your favorite stocks
            </Typography>
          </CardSection4>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSection4>
            <Image src="/Shape.svg" alt="banner" height={50} width={50} style={{ marginBottom: 15 }} />
            <Typography variant="h5" align="left" sx={{ fontSize: "1.5rem", fontWeight: 900 }}>
              Superinvestors and <br /> portfolio tracking
            </Typography>
            <Typography variant="body1" align="left" sx={{ fontSize: "1rem", fontWeight: 500, color: "#4A4A4A", mt: 1 }}>
              Earnings call report from your favorite stocks
            </Typography>
          </CardSection4>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSection4>
            <Image src="/maximize.svg" alt="banner" height={50} width={50} style={{ marginBottom: 15 }} />
            <Typography variant="h5" align="left" sx={{ fontSize: "1.5rem", fontWeight: 900 }}>
              Full historical <br /> performance
            </Typography>
            <Typography variant="body1" align="left" sx={{ fontSize: "1rem", fontWeight: 500, color: "#4A4A4A", mt: 1 }}>
              Earnings call report from your favorite stocks
            </Typography>
          </CardSection4>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardSection4>
            <Image src="/send.svg" alt="banner" height={50} width={50} style={{ marginBottom: 15 }} />
            <Typography variant="h5" align="left" sx={{ fontSize: "1.5rem", fontWeight: 900 }}>
              Straight to inbox
            </Typography>
            <Typography variant="body1" align="left" sx={{ fontSize: "1rem", fontWeight: 500, color: "#4A4A4A", mt: 1 }}>
              Earnings call report from your favorite stocks
            </Typography>
          </CardSection4>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ mt: 5 }}>
        <Typography variant="body1" align="center" sx={{ fontSize: "1.5rem", fontWeight: 900 , marginBottom: '4rem' }}>
          ...and much more.
        </Typography>
      </Grid>
    </Grid>
  );
}
