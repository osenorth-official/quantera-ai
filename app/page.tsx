import { Box } from "@mui/material";
import TopBanner from "@/sections/pre_live_home_sections/topBanner";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex", height: "120vh" }}>
        <TopBanner />
      </Box>
      <Box sx={{ display: "flex", bgcolor: "#F1F8F7", height: "100vh", mt: 4 }}>
        <h1>hihihih</h1>
      </Box>
    </>
  );
}
