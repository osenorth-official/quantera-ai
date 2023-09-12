import { Box } from "@mui/material";
import TopBanner from "@/sections/pre_live_home_sections/topBanner";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <TopBanner />
      </Box>
      <Box sx={{ display: "flex", bgcolor: "yellow", height: "100vh" }}>
        <h1>hihihih</h1>
      </Box>
    </>
  );
}
