"use client";
import { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  InputAdornment,
} from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import CustomSnackbar from "@/components/snackbar";
import styles from '../../app/styles1.module.css'; // Import the CSS 

export default function TopBanner() {
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const onGetPremiumReport = async () => {
    setEmailError(false);
    const emailReg = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    if (!email.match(emailReg)) {
      setEmailError(true);
      return;
    }
    await supabase.from("email").insert([
      {
        email: email,
      },
    ]);
    setOpenSnackbar(true);
    setEmail("");
  };

  const  keyPress = (e:any) => {
    if(e.keyCode == 13){
      onGetPremiumReport();
    }
    if(email === ""){
      setEmailError(false)
    }
 }

  return (
    <div
    className={`${styles.parallaxBackground} parallax-background`}
    style={{
      backgroundImage: 'url("/blurry_gradient.png")',
      backgroundColor: "#FFFBF5",
      backgroundSize: 'cover',  // or 'contain' depending on your requirement
      backgroundPosition: '-55vw center',  // Set the background position to left center
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',  // Center vertically
      zIndex: '1',
      backgroundPositionY: `calc(50% - ${scrollPosition * 1.5}px)`, // Increased multiplier for a more visible parallax effect
    }}
  >
    <Grid container spacing={2}>
      <Grid item xs={12} md={!md ? 7 : 12} sx={{ m: sm ? 2 : 15 }}>
        <CustomSnackbar
          open={openSnackbar}
          setOpen={setOpenSnackbar}
          message={"Email Successfully Added."}
        />
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontWeight: 900, fontSize: sm ? "3rem" : "5rem", marginLeft: sm ? "1rem" : "0" , marginTop: sm ? "3rem" : "0"}}
        >
          <span style={{ backgroundColor: "black", color: "white", }}>
            Empowering
          </span>
          <span> </span>
          investors <br /> through AI powered  <br />
          insights.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, fontWeight: 600 ,  marginLeft: sm ? "1rem" : "0"}}>
          Eliminate hours wasted finding, cleaning, visualizing and transforming
          data using <br /> the power of AI. <br />
          Register and get a free premium report to your inbox.
        </Typography>

        <Grid container spacing={0} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={7}>
            <TextField
              label="Email"
              variant="outlined"
              sx={{ width: sm ? "100%" : "35vw", p: 0, backgroundColor: "white" }}
              value={email}
              size="small"
              error={emailError}
              onKeyDown={keyPress}
              helperText={emailError ? "Please enter a valid email." : ""}
              onChange={({ target }) => setEmail(target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#73F3C4",
                        color: "black",
                        textTransform: "none",
                        fontWeight: 900,
                      }}
                      disableElevation
                      onClick={onGetPremiumReport}
                    >
                      Get free premium report
                    </Button>
                  </InputAdornment>
                ),
                style: { padding: 0 },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
  style={{ display: "flex", justifyContent: "center", alignItems: "flex-end" }}
  item
  xs={12}
  sx={{
    ml: "auto",
    mr: "auto",
    mt: sm ? 2 : 0,
    p: 0,
    position: "relative",
    minHeight: sm ? "25vh" : "80vh",
    maxHeight: sm ? "25vh" : "none",
  }}
>
  <Image
    src="/Banner.png"
    alt="banner"
    layout="responsive"
    width={10}
    height={600}
    objectFit="contain"
    quality={80}
    unoptimized
    className={styles.bannerImage} // Apply the CSS class using className prop
  />
</Grid>

    </Grid>
    </div>
  );

}
