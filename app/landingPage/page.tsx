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
import ForgotPasswordModal from "@/components/forgotPasswordModal";

export default function Home() {
  const ref = useRef(null);
  const featureRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Navbar currRef={ref} featureRef={featureRef} setOpen={setOpen} />
      <LoginModal
        open={open}
        handleClose={() => setOpen(!open)}
        openForgot={() => {
          setOpen(!open);
          setOpenForgot(!openForgot);
        }}
      />
      <ForgotPasswordModal
        open={openForgot}
        handleClose={() => setOpenForgot(!openForgot)}
        handleBack={() => {setOpenForgot(!openForgot); setOpen(!open)}}
      />
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
        id="section3"
      >
        <Section3 featureRef={featureRef}/>
      </Box>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          minWidth: "100vw",
          pl: "10%",
          pr: "10%",
        }}
      >
        <Section4 />
      </Box>
      <Box
        sx={{
          display: "flex",
          bgcolor: "#73F3C4",
          minHeight: "100vh",
          minWidth: "100vw",
          pl: "10%",
          pr: "10%",
        }}
      >
        <Section5 />
      </Box>
      <Box sx={{ display: "flex", minHeight: "100vh", minWidth: "100vw" }} id="section6">
        <Section6 currRef={ref} />
      </Box>
      <Box sx={{ display: "flex", minHeight: "100vh", minWidth: "100vw" }} id="section7">
        <CustomTable />
      </Box>
      <Box sx={{ display: "flex", minHeight: "100vh", minWidth: "100vw" }}>
        <Section7 />
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
