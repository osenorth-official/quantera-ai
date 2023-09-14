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

export default function Footer() {
  const [email, setEmail] = useState("");
  return (
    <Grid
      container
      spacing={2}
      sx={{
        bgcolor: "black",
        mt: 5,
        isplay: "flex",
        minHeight: "35vh",
        minWidth: "100vw",
      }}
    >
      <Grid item xs={5} sx={{ ml: 10 }}>
        <Image src="/Logo.png" alt="banner" height={60} width={240} />
        <Typography variant="body1" style={{ color: "white" }} align="left">
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
            <LinkedInIcon style={{ color: "white", fontSize: 35 }} />
          </IconButton>
        </Stack>
        <Typography variant="body1" style={{ color: "white" }} align="left">
          <CopyrightIcon /> {new Date().getFullYear()} Quantera AI. All rights
          reserved.
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 5 }}>
        <Typography variant="h5" style={{ color: "white" }} align="right">
          Recieve a free premium report by signing up
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          sx={{ width: "30vw", p: 0, bgcolor: 'white', borderRadius: 2, ml:"39%", mt: 2 }}
          value={email}
          size="small"
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
                >
                  Get premium report
                </Button>
              </InputAdornment>
            ),
            style: { padding: 0 },
          }}
        />
        <Typography variant="body1" style={{ color: "white", marginTop: 5 }} align="right">
          Explore app
        </Typography>
        <Typography variant="body1" style={{ color: "white", marginTop: 5 }} align="right">
          Contact us
        </Typography>
      </Grid>
    </Grid>
  );
}
