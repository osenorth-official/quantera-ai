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
        mt: { xs: "5rem", md: "12.5rem" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "35vh",
        minWidth: "100vw",
        p: { xs: 2, md: 11 },
      }}
    >
      <Grid item xs={12} md={5} sx={{ mb: { xs: 2, md: 0 } }}>
        <Image src="/Logo.png" alt="banner" height={60} width={240} />
        <Typography
          variant="body1"
          style={{ color: "white", fontSize: "1.25rem", fontWeight: 600 }}
          align="left"
        >
          Data visualization and stock insights have
          <br />
          taken a back seat. We bring data back to
          <br /> being readable.
        </Typography>
        <Stack direction="row" spacing={1} sx={{ ml: -1.25, mb: 2, mt: 2 }}>
          <IconButton aria-label="LinkedIn">
            <LinkedInIcon style={{ color: "white", fontSize: 35 }} />
          </IconButton>
          <IconButton aria-label="Discord">
            <Image
              src="/discord-mark-white.svg"
              alt="banner"
              height={30}
              width={30}
            />
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
      <Grid item xs={12} md={6} sx={{ mt: { xs: 5, md: 0 } }}>
        <Typography
          variant="h5"
          style={{ color: "white", fontSize: "2rem", fontWeight: 900 }}
          align="right"
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
            marginLeft: { xs: 0, md: "13rem" }, // Apply margin left only in desktop view
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
          style={{ color: "white", marginTop: 5, textAlign: "right" }}
        >
          Explore app
        </Typography>
        <Typography
          variant="body1"
          style={{ color: "white", marginTop: 5, textAlign: "right" }}
        >
          Contact us
        </Typography>
      </Grid>
    </Grid>
  );
}
