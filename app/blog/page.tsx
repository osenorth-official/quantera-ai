"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import theme from "@/theme/theme";
import BlogCards from "@/components/blogCards";
import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Footermobile from "@/components/footermobile";


export default function Blog() {
  const supabase = createClientComponentClient();
  const [blogsList, setBlogsList] = useState([] as any);
  const isMobile = useMediaQuery("(max-width: 600px)");


  useEffect(() => {
    supabase
      .from("blogs")
      .select()
      .then(({ data, error }) => setBlogsList(data));
  }, []);
  return (
     <div  style={{ backgroundColor: "#FFFBF5"}}>
       <Navbar currRef={undefined} />
     <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
     <div style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>Insights Blog</h1>
        <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>250 word essays on market insights</h3>
        <div style={{ display: "flex", flexDirection: isMobile ? "column":"row", flexWrap: "wrap", gap: "1rem", justifyContent: "center", width: "100", alignItems: "center" }}>
          {blogsList?.map((item: any, index: number) => (
            <div key={index} style={{  }}>
              <BlogCards item={item} />
            </div>
          ))}
        </div>
      </div>
      {isMobile ? <Footermobile /> : <Footer />}
    </div>
    </div>

  );
}
