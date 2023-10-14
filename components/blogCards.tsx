import { CardContent, Card, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import moment from "moment";
import { useState } from "react";
import styles from "@/app/BlogCards.module.css"; // Import CSS styles

export default function BlogCards(props: any) {
  const item = props.item;
  const { push } = useRouter();
  const imgUrl =
    "https://yjasfeanlannyjroczqf.supabase.co/storage/v1/object/public/blog-images/";
  const [queryParams, setQueryParams] = useState({});

  const onBlogClick = () => {
    const queryParams = { id: props.item.id };
    const query = new URLSearchParams(queryParams).toString();
    console.log("ID: ",queryParams)
    push(`/blog/${item.id}?${query}`);
  };

  return (
    <Card
      variant="outlined"
      //className={styles.card} // Apply the CSS class for responsive styles
      onClick={onBlogClick}
      style={{borderColor: "black",
        borderWidth: "2px",
        borderRadius: "10px",
        cursor: "pointer",
        minHeight: "400px",
        overflow: "hidden",
        width: "30vw",
        margin: "20px",
        boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.202)"
      }}
    >
      <CardMedia
        component="img"
        height="150"
        image={imgUrl + item.thumbnail.replace(" ", "%20")}
        alt="Banner"
        className={styles.cardMedia} // Apply styles for the image
      />
      <CardContent className={styles.cardContent}> {/* Apply styles for the content */}
        <Typography variant="body2" className={styles.heading}> {/* Apply styles for the heading */}
          {item.heading}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {moment(props.created_at, "", true).format("Do MMMM")}
        </Typography>
      </CardContent>
    </Card>
  );
}
