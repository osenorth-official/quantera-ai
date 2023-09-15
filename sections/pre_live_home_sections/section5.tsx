import {
  Grid,
  Typography,
  Rating,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import Image from "next/image";

const cardStyle = {
  display: "flex",
  minHeight: 350,
  minWidth: 300,
  alignItems: "center",
  justifyContent: "center",
  borderColor: "black",
};

export default function Section5() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8} sx={{ mt: "6.25rem" }}>
        <Typography variant="h3"  sx={{ fontSize: "5.125rem", fontWeight: 900}}>
          Streamline your workflow
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "1.5rem", fontWeight: 600 }} >
          A platform that will smoothly integrate in your workstream.
        </Typography>
      </Grid>
      <Grid item xs={4} sx={{ mt: "8.25rem" }}>
        <Rating
          name="read-only"
          value={5}
          readOnly
          style={{ color: "black", fontSize: 18,  }}
        />
        <Typography variant="body1" sx={{ mt: 1, fontSize: "1rem", fontWeight: 600 }} align="left">
          The platform has been able to make
          <br /> insights the easiest thing to get.
        </Typography>
        <Typography variant="caption" style={{ color: "#5C7C6F", fontSize: "0.75rem", fontWeight: 600 }}>
          Investment Fund Manager
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: "4.75rem" }}>
        <Stack direction={"row"} spacing={0} sx={{ ml: "25%" }}>
          <Card variant="outlined" style={cardStyle}>
            <CardContent>
              <Image
                src="/noun-insight-4071852.png"
                alt="banner"
                height={70}
                width={70}
                style={{ marginLeft: "30%", marginBottom: 4 }}
              />
              <Typography variant="h3" align="center" sx={{ fontSize: "3rem", fontWeight: 900}}>
                Create
              </Typography>
              <Typography variant="body1" style={{ color: "#5C7C6F",fontSize: "1.25rem", fontWeight: 600 }}>
                From any company with another
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" style={cardStyle}>
            <CardContent>
              <Image
                src="/noun-insight-4071852-1.png"
                alt="banner"
                height={70}
                width={70}
                style={{ marginLeft: "30%", marginBottom: 4 }}
              />
              <Typography variant="h3" align="center" sx={{ fontSize: "3rem", fontWeight: 900}}>
                Insight
              </Typography>
              <Typography variant="body1" style={{ color: "#5C7C6F", fontSize: "1.25rem", fontWeight: 600 }}>
                From any company with another
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" style={cardStyle}>
            <CardContent>
              <Image
                src="/noun-insight-4071852-2.png"
                alt="banner"
                height={70}
                width={70}
                style={{ marginLeft: "30%", marginBottom: 4 }}
              />
              <Typography variant="h3" align="center" sx={{ fontSize: "3rem", fontWeight: 900}}>
                Report
              </Typography>
              <Typography variant="body1" style={{ color: "#5C7C6F" , fontSize: "1.25rem", fontWeight: 600}}>
                From any company with another
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Grid>
    </Grid>
  );
}
