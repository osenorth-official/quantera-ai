"use client"
import { useEffect, useState } from "react";
import { Card, CardContent, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import moment from "moment";

export default function RecommendedBlogCards(props: any) {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const blogsList = props.blog;
  const supabase = createClientComponentClient();
  const imgUrl =
  "https://yjasfeanlannyjroczqf.supabase.co/storage/v1/object/public/blog-images/";

  return (
    <Card
      variant="outlined"
      style={{
        marginLeft: "1%",
        borderColor: "black",
        width: isMobile ? "80vw" : 500,
        borderWidth: 2,
        borderRadius: 8,
        maxHeight: 300
      }}
      sx={{ boxShadow: 5 }}
    >
      <CardContent>
        <Grid container spacing={1} style={{display: 'flex' , alignItems: 'center'}}>
          <Grid item xs={6}>
            <Image
              src={blogsList ? imgUrl + blogsList['thumbnail']?.replace(" ", "%20") :"/24c2337e-6b18-4702-be69-6f5a968e95ed-3.png"}
              alt="banner"
              height={135}
              width={235}
            />
          </Grid>
          <Grid item xs={6}>
          <Stack direction="column" spacing={2}>
            <Typography
              variant="h2"
              sx={{ fontWeight: 700, fontSize: "1.6rem" }}
            >
             {blogsList ? blogsList['heading']: "What does it mean to have a yield curve flip"}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 500, fontSize: "0.75rem", mr: "auto", color: "#4A4A4A" }}
            >
               {blogsList ? moment(blogsList.created_at, "", true).format("Do MMMM") : "12th September"}
            </Typography>
          </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
