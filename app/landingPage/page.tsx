"use client";
import { useRef, useState, } from "react";
import { Box,useMediaQuery } from "@mui/material";
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
import CustomTableMobile from "@/components/customTableMobile";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/theme";
import LoginModal from "@/components/loginModal";
import ForgotPasswordModal from "@/components/forgotPasswordModal";

export default function Home() {
  const ref = useRef(null);
  const featureRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)"); // Determine if it's a mobile screen


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
        handleBack={() => {
          setOpenForgot(!openForgot);
          setOpen(!open);
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <TopBanner />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "#F1F8F7",
          }}
        >
          <Section2 />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "#73F3C4",
          }}
           id="section3"
        >
          <Section3 featureRef={featureRef}/>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            padding: "10px", // Adjust padding for responsiveness
          }}
        >
          <Section4 />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "#73F3C4",
            padding: "10px", // Adjust padding for responsiveness
          }}
        >
          <Section5 />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          id="section6"
        >
          <Section6 currRef={ref} />
        </Box>
      <Box sx={{ display: "flex", minHeight: "100vh", minWidth: "100vw" }} id="section7">
        {isMobile ? <CustomTableMobile /> : <CustomTable />} {/* Conditionally render CustomTable based on screen size */}
      </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Section7 />
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
