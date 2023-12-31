import { Typography, Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";

export default function Section3(props: any) {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const gradientText = {
  
   
    fontSize: isMobile ? "3rem" : "4rem",
    fontWeight: 900,
  };
  return (
    <Grid container spacing={2} >
      <Grid item xs={12} sx={{ mt: 10 }} ref={props.featureRef}>
        <Typography
          variant="h3"
          align="center"
          style={{ marginRight: isMobile ? '1rem' : '0' , marginLeft: isMobile ? '1rem' : '0' ,  marginTop: isMobile ? '3rem' : '0' }}
         sx={gradientText}
        >
        Discover our <span style={{background: 'linear-gradient(45deg, #FF6432 , #7B2EFF)',  WebkitBackgroundClip: "text",  color: "transparent" }}>  powerful</span> features.
    </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 3 }}>
          Lorem Ipsum.
        </Typography>
      </Grid>
      <Grid container item xs={12} sx={{ mt: 2, ml: isMobile ? "0%" : "2%" }}>
        <Image src="/Group_37.png" width={isMobile ? 800 : 1600} height={isMobile ? 400 : 800} alt="Image" unoptimized/>
      </Grid>
    </Grid>
  );
}
