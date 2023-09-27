import { CardContent, Card, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import moment from "moment";
import { useState } from "react";

export default function BlogCards(props: any) {
  const item = props.item;
  const { push } = useRouter();
  const imgUrl =
    "https://yjasfeanlannyjroczqf.supabase.co/storage/v1/object/public/blog-images/";
  const [queryParams, setQueryParams] = useState({})

  const onBlogClick = (props: any) => {
    const queryParams = props.item
    const query = new URLSearchParams(queryParams).toString();
    push(`/blog/${item.id}?${query}`)
  }

  return (
    <Card
      variant="outlined"
      style={{
        marginLeft: "5%",
        borderColor: "black",
        width: 500,
        borderWidth: 2.5,
        borderRadius: 10,
        cursor: "pointer",
        minHeight: 430,
        overflow: "none",
      }}
      sx={{ boxShadow: 5 }}
      onClick={() => onBlogClick(props)}
    >
      <CardMedia
        component="img"
        height="150"
        image={imgUrl + item.thumbnail.replace(" ", "%20")}
        alt="Banner"
        sx={{ objectFit: "fill", maxHeight: "33vh" }}
      />
      <CardContent>
        <Typography variant="body2" sx={{ fontWeight: 700, fontSize: "2rem" }}>
          {item.heading}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {moment(props.created_at, "", true).format("Do MMMM")}
        </Typography>
      </CardContent>
    </Card>
  );
}
