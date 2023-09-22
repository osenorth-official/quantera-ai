"use client";
import { useRef, useState } from "react";
import { Box } from "@mui/material";
import {
  TopBanner,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
} from "@/sections/pre_live_home_sections";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CustomTable from "@/components/customTable";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/theme";
import LoginModal from "@/components/loginModal";

export default function Home() {
  const ref = useRef(null);
  const [open, setOpen] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <Navbar currRef={ref} setOpen={setOpen}/>
      <LoginModal open={open} handleClose={() => setOpen(!open)}/>
      <Box sx={{ display: "flex", minHeight: "90vh", minWidth: "100vw" }}>
        <TopBanner />
      </Box>
      <Box
        sx={{
          display: "flex",
          bgcolor: "#F1F8F7",
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <Section2 />
      </Box>
      <Box
        sx={{
          display: "flex",
          bgcolor: "#73F3C4",
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <Section3 />
      </Box>
      <Box sx={{ display: "flex", minHeight: "100vh", minWidth: "100vw", pl: "10%", pr: "10%" }}>
        <Section4 />
      </Box>
      <Box
        sx={{
          display: "flex",
          bgcolor: "#73F3C4",
          minHeight: "100vh",
          minWidth: "100vw",
          pl: "10%",
          pr: "10%"
        }}
      >
        <Section5 />
      </Box>
      <Box sx={{ display: "flex", minHeight: "100vh", minWidth: "100vw" }}>
        <Section6 currRef={ref}/>
      </Box>
      <Box sx={{ display: "flex", minHeight: "100vh", minWidth: "100vw", }}>
        <CustomTable />
      </Box>
      <Box sx={{ display: "flex", minHeight: "100vh", minWidth: "100vw" }}>
        <Section7 />
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
