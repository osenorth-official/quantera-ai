import { CardContent, Card, CardMedia, Typography } from "@mui/material";

export default function BlogCards(props: any) {
    const item = props.item
  return (
    <Card
      variant="outlined"
      style={{
        marginLeft: "5%",
        borderColor: "black",
        width: 500,
        borderWidth: 2.5,
        borderRadius: 10,
      }}
      sx={{ boxShadow: 5 }}
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
