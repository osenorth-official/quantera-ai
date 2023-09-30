import { CardContent, Card, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CustomCard({ children }: Props,) {
  return (
<Card
  variant="outlined"
  style={{
   
    borderColor: "black",
    width: 350,
    borderWidth: 2.5,
    borderRadius: 10,
    marginBottom: 5,
    height: 250,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
  sx={{
    boxShadow: 10,
    ml: { xs: 0, md: "5%" }, // Set margin-left to 0 for xs (mobile) view, 5% for other views
  }}
>      <CardContent>{children}</CardContent>
    </Card>
  );
}
