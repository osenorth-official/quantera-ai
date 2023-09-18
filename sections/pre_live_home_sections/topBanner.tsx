"use client";
import { useState } from "react";
import { Grid, Typography, TextField, Button, useMediaQuery, InputAdornment } from "@mui/material";
import Image from "next/image";
import { useTheme } from '@mui/material/styles';

export default function TopBanner() {
  const [email, setEmail] = useState("");
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid
      container
      spacing={2}
    //   sx={{
    //     backgroundImage: "url('/Banner.png')",
    //     backgroundRepeat: "no-repeat",
    //     backgroundPositionY: "100%",
    //     backgroundPositionX: "50%",
    //     backgroundSize: "60% 50%",
    //     backgroundAttachment: "scroll"
    //   }}
    >
      <Grid item xs={ !md ? 6 : 12} sx={{ m: 5,}}>
        <Typography variant="h2" component="h2" style={{ fontWeight: 900}}>
          <span style={{ backgroundColor: "black", color: "white" }}>
            Empowering
          </span><span> </span>
          investors through AI powered insights.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }} style={{ fontWeight: 600}}>
          Eliminate hours wasted finding, cleaning, visualizing and transforming
          data using <br /> the power of AI. <br />
          Register and get a free premium report to your inbox.
        </Typography>
        
        <Grid container spacing={0} sx={{ mt: 2 }}>
          <Grid item xs={7}>
            <TextField
              label="Email"
              variant="outlined"
              sx={{ width: "35vw", p:0 }}
              value={email}
              size="small"
              onChange={({ target }) => setEmail(target.value)}
              InputProps={{endAdornment: <InputAdornment position="end"><Button
                variant="contained"
                style={{
                  backgroundColor: "#73F3C4",
                  color: "black",
                  textTransform: "none",
                  fontWeight: 900,
                  
                }}
                disableElevation
              >
                Get free premium report
              </Button>
              </InputAdornment>,
              style: {padding: 0}}}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9.5} sx={{ ml:'auto',mr: 'auto',mt: 12,p:0, position: "relative", display: {lg: 'block', xs: 'none'} , minHeight: "80vh"}}>
        <Image
          src="/Banner.png"
          alt="banner"
          fill
          objectFit={'contain'}
        />
      </Grid>
    </Grid>
  );
}
