import { Box } from "@mui/material";
import TopBanner from "@/sections/pre_live_home_sections/topBanner";
import Section2 from "@/sections/pre_live_home_sections/section2";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex", minHeight: "125vh", minWidth: "100vw" }}>
        <TopBanner />
      </Box>
      <Box sx={{ display: "flex", bgcolor: "#F1F8F7", minHeight: "100vh", minWidth: "100vw"}}>
        <Section2 />
      </Box>
    </>
  );
}
