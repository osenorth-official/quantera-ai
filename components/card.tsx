import { CardContent, Card } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CustomCard({ children }: Props) {
  return (
    <Card
      variant="outlined"
      sx={{
        width: { xs: 300, md: 350 }, // Set width to 300 for xs (mobile) view, 350 for other views
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 2,
        marginBottom: 5,
        height: 250,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: 10,
        ml: { xs: 0, md: "5%" }, // Set margin-left to 0 for xs (mobile) view, 5% for other views
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
}