import { CardContent, Card, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CustomCard({ children }: Props,) {
  return (
    <Card variant="outlined" style={{marginLeft: "10%", borderColor: 'black', minWidth: 280}}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
