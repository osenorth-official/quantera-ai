import { CardContent, Card } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CardSection4({ children }: Props) {
  return (
    <Card
      style={{ marginLeft: "5%", minWidth: 300, minHeight: 200, boxShadow: "none" }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
}
