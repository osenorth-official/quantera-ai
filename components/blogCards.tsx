import { CardContent, Card, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import moment from "moment";

export default function BlogCards(props: any) {
  const item = props.item;
  const { push } = useRouter();
  const imgUrl =
    "https://yjasfeanlannyjroczqf.supabase.co/storage/v1/object/public/blog-images/";

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
        minHeight: 450,
        overflow: 'none'
      }}
      sx={{ boxShadow: 5 }}
      onClick={() => push(`/blog/${item.id}`)}
    >
      <CardMedia
        component="img"
        height="150"
        image={imgUrl + item.thumbnail.replace(" ", "%20")}
        alt="Banner"
        sx={{  objectFit: "fill", maxHeight: "35vh" }}
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
