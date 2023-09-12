"use client";
import { useState } from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import Image from "next/image";

export default function TopBanner() {
  const [email, setEmail] = useState("");
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sx={{ m: 5 }}>
        <Typography variant="h2" component="h2">
          <span style={{ backgroundColor: "black", color: "white" }}>
            Empowering i
          </span>
          nvestors through AI powered insights.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Eliminate hours wasted finding, cleaning, visualizing and transforming
          data using <br /> the power of AI.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Register and get a free premium report to your inbox.
        </Typography>
        <Grid container spacing={0} sx={{ mt: 2 }}>
          <Grid item xs={7}>
            <TextField
              label="Email Address"
              variant="outlined"
              sx={{ width: "28vw" }}
              value={email}
              size="small"
              onChange={({ target }) => setEmail(target.value)}
            />
          </Grid>
          <Grid item xs={5}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#73F3C4",
                color: "black",
                textTransform: "none",
              }}
            >
              Get free premium report
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ ml: 35, zIndex: 1 }}>
        <Image
          src="/Banner.png"
          alt="banner"
          height={280}
          width={900}
          style={{ margin: 5 }}
        />
      </Grid>
    </Grid>
  );
}
