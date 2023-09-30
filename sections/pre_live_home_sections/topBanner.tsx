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
import CustomSnackbar from "@/components/snackbar";

export default function TopBanner() {
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const onGetPremiumReport = async () => {
    setEmailError(false);
    if (!email.match(/.+@.+/)) {
      setEmailError(true);
      return;
    }
    await supabase.from("email").insert([
      {
        email: email,
      },
    ]);
    setOpenSnackbar(true)
    setEmail("");
  };

  return (
    <Grid container spacing={2}>

      <Grid item xs={12} md={!md ? 7 : 12} sx={{ m: sm ? 2 : 15 }}>
         <CustomSnackbar open={openSnackbar} setOpen={setOpenSnackbar} message={"Email Successfully Added."} />
        <Typography variant="h1" component="h1" sx={{ fontWeight: 900, fontSize: sm ? '3rem' : '5rem' }}>
          <span style={{ backgroundColor: "black", color: "white" }}>
            Empowering
          </span>
          <span> </span>
          investors <br /> through AI powered <br />
          insights.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, fontWeight: 600  }}>
          Eliminate hours wasted finding, cleaning, visualizing and transforming
          data using <br /> the power of AI. <br />
          Register and get a free premium report to your inbox.
        </Typography>

        <Grid container spacing={0} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={7}>
            <TextField
              label="Email"
              variant="outlined"
              sx={{ width: sm ? "100%" : "35vw", p: 0 }}
              value={email}
              size="small"
              error={emailError}
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
    layout="fill"
    objectFit="contain" // Change objectFit to "contain" to fit the image within the container
    quality={100}
  />
</Grid>

    </Grid>
  );
}
