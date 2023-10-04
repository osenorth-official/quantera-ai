import React, { useState } from "react";
import {
  Grid,
  Typography,
  IconButton,
  Stack,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import Image from "next/image";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Margin } from "@mui/icons-material";

export default function Footermobile() {
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const onGetPremiumReport = async () => {
    setEmailError(false);
    const emailReg = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!email.match(emailReg)) {
      setEmailError(true);
      return;
    }
    await supabase.from("email").insert([
      {
        email: email,
      },
    ]);
    setEmail("");
  };

  const keyPress = (e: { keyCode: number; }) => {
    if (e.keyCode === 13) {
      onGetPremiumReport();
    }
    if (email === "") {
      setEmailError(false);
    }
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        bgcolor: "black",
        mt: { xs: "5rem", md: "12.5rem" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "35vh",
        marginTop: "3rem",
        p: { xs: 2, md: 11 },
      }}
    >
      <Grid item xs={12} md={5} sx={{ mb: { xs: 2, md: 0 } }}>
        <Image src="/logo12.png" alt="banner" height={60} width={240} style={{ marginBottom: "20px"  , marginLeft : '2rem' , marginTop: "2rem"}} />
        <Typography
          variant="body1"
          style={{ color: "white", fontSize: "1rem", fontWeight: 600 }}
          align="center"
        >
          Data visualization and stock insights have
          <br />
          taken a back seat. We bring data back to
          <br /> being readable.
        </Typography>
        <Stack direction="row" spacing={1} sx={{ ml: -1.25, mb: 2, mt: 2,  display: 'flex' , justifyContent:"center"}}>
          <IconButton
            aria-label="LinkedIn"
            onClick={() => window.open("https://www.linkedin.com/company/quanteraai", "_blank")}
          >
            <LinkedInIcon style={{ color: "white", fontSize: 30 }} />
          </IconButton>
          <IconButton aria-label="Discord">
            <Image src="/discord-mark-white.svg" alt="banner" height={30} width={30} />
          </IconButton>
        </Stack>
        <Typography
          variant="body1"
          style={{ color: "white", fontSize: "0.675rem", fontWeight: 600 }}
          align="center"
        >
          <CopyrightIcon /> {new Date().getFullYear()} Quantera AI. All rights
          reserved.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} sx={{ mt: { xs: 5, md: 0 } }}>
        <Typography
          variant="h5"
          style={{ color: "white", fontSize: "1rem", fontWeight: 900 }}
          align="center"
        >
          Receive a free premium report by signing up
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          sx={{
            width: { xs: "100%", md: "30vw" },
            p: 0,
            alignItems: "right",
            bgcolor: "white",
            borderRadius: 2,
            mt: 5,
          }}
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
                  }}
                  disableElevation
                  onClick={onGetPremiumReport}
                >
                  Get premium report
                </Button>
              </InputAdornment>
            ),
            style: { padding: 0 },
          }}
        />
        <Typography
          variant="body1"
          style={{ color: "white", marginTop: 15, textAlign: "center", marginBottom: 30 }}
        >
          Contact us
        </Typography>
      </Grid>
    </Grid>
  );
}
