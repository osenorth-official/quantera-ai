"use client";
import { useState } from "react";
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

export default function Footer() {
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

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
    setEmail("");
  };
  return (
    <Grid
      container
      spacing={2}
      sx={{
        bgcolor: "black",
        mt: "12.5rem",
        isplay: "flex",
        minHeight: "35vh",
        minWidth: "100vw",
        p: 11,
      }}
    >
      <Grid item xs={5} sx={{ ml: 10 }}>
        <Image src="/Logo.png" alt="banner" height={60} width={240} />
        <Typography
          variant="body1"
          style={{ color: "white", fontSize: "1.25rem", fontWeight: 600 }}
          align="left"
        >
          Data visualisation and stock insights have
          <br />
          taken a back seat. We bring data back to
          <br /> being readable.
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton aria-label="delete">
            <LinkedInIcon style={{ color: "white", fontSize: 35 }} />
          </IconButton>
          <IconButton aria-label="delete">
           <Image src="/discord-mark-white.svg" alt="banner" height={30} width={30} />
          </IconButton>
        </Stack>
        <Typography
          variant="body1"
          style={{ color: "white", fontSize: "0.875rem", fontWeight: 600 }}
          align="left"
        >
          <CopyrightIcon /> {new Date().getFullYear()} Quantera AI. All rights
          reserved.
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 5 }}>
        <Typography
          variant="h5"
          style={{ color: "white", fontSize: "2rem", fontWeight: 900 }}
          align="right"
        >
          Recieve a free premium report by signing up
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          sx={{
            width: "30vw",
            p: 0,
            bgcolor: "white",
            borderRadius: 2,
            ml: "32%",
            mt: 2,
          }}
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
          style={{ color: "white", marginTop: 5 }}
          align="right"
        >
          Explore app
        </Typography>
        <Typography
          variant="body1"
          style={{ color: "white", marginTop: 5 }}
          align="right"
        >
          Contact us
        </Typography>
      </Grid>
    </Grid>
  );
}
