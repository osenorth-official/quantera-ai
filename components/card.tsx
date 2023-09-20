import { CardContent, Card, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CustomCard({ children }: Props,) {
  return (
    <Card variant="outlined" style={{marginLeft: "5%", borderColor: 'black', width: 350, borderWidth: 2.5, borderRadius: 10}} sx={{boxShadow: 5}}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
