"use client";
import { useState } from "react";
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

export default function TopBanner() {
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false)
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));

  const onGetPremiumReport = async () => {
    setEmailError(false);
    if(!email.match(/.+@.+/)){
      setEmailError(true);
      return
    }
    await supabase.from("email").insert([
      {
        email: email,
      },
    ]);
    setEmail("")
  };
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
      <Grid item xs={!md ? 7 : 12} sx={{ m: 15 }}>
      <Typography
  variant="h1"
  component="h1"
  style={{
    fontWeight: 500,
    fontSize: 82,
  }}
>
  <span style={{ backgroundColor: "black", color: "white" }}>
    Empowering I
  </span>
  <span>
    nvestors
  </span>
  <br />
  through AI powered
  <br />
  insights.
</Typography>


        <Typography variant="body1" sx={{ mt: 1 }} style={{ fontWeight: 300 }}>
          Eliminate hours wasted finding, cleaning, visualizing and transforming
          data using <br /> the power of AI. <br />
          Register and get a free premium report to your inbox.
        </Typography>

        <Grid container spacing={0} sx={{ mt: 2 }}>
          <Grid item xs={7}>
            <TextField
              label="Email"
              variant="outlined"
              sx={{ width: "35vw", p: 0 }}
              value={email}
              size="small"
              error={emailError}
              helperText={emailError ? "Please enter a valid email.": ""}
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
        item
        xs={9.3}
        sx={{
          ml: "auto",
          mr: "auto",
          mt: 2,
          p: 0,
          position: "relative",
          display: { lg: "block", xs: "none" },
          minHeight: "75vh",
        }}
      >
        <Image src="/Banner.png" alt="banner" fill objectFit={"contain"} />
      </Grid>
    </Grid>
  );
}
