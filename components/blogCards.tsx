import { CardContent, Card, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function BlogCards(props: any) {
    const item = props.item
    const { push } = useRouter();
  return (
    <Card
      variant="outlined"
      style={{
        marginLeft: "5%",
        borderColor: "black",
        width: 500,
        borderWidth: 2.5,
        borderRadius: 10,
        cursor: "pointer"
      }}
      sx={{ boxShadow: 5 }}
      onClick={() => push(`/blog/${item.sequence}`)}
    >
      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt="Banner"
      />
      <CardContent>
        <Typography variant="body2" sx={{ fontWeight: 700, fontSize: "2rem"}}>
          {item.title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {item.date}
        </Typography>
      </CardContent>
    </Card>
  );
}
