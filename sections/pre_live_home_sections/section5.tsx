import { Grid, Typography, Rating, Card, CardContent, Stack, useMediaQuery, Box } from "@mui/material";
import Image from "next/image";

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
  minHeight: "400px", 
  padding: "16px",
  marginBottom: "16px",
  borderColor: "rgba(0, 0, 0)",
  border: "1.5px solid",
  boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.2)",
   // Mobile styles
   '@media (max-width: 600px)': {
    minHeight: '200px',
    width: '80%',
    marginLeft: '2.3rem',
    marginRight: '2rem'
  }
};

const imageStyle = {
  display: "block",
  margin: "0 auto", // Center images horizontally
};

const desktopCardWrapperStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  "& > .MuiCard-root": {
    borderRadius: "0",
    "&:first-child": {
      borderTopLeftRadius: "5px",
      borderBottomLeftRadius: "5px",
    },
    "&:last-child": {
      borderTopRightRadius: "5px",
      borderBottomRightRadius: "5px",
    },
  },
};

export default function Section5() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid alignItems="center" item xs={12} sm={8} md={8} lg={8} xl={8}>
        <Typography variant="h3" sx={{ mt: 10, ml: isMobile ? "3rem" : "8rem", fontSize: ["2.4rem", "3.2rem"], fontWeight: 900 }}>
        <span style={{background: 'linear-gradient(45deg, #FF6432 , #7B2EFF)',  WebkitBackgroundClip: "text",  color: "transparent",}}>  Streamline </span>your workflow
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, ml: isMobile ? "3rem" : "8rem", fontSize: ["1rem", "1.5rem"], fontWeight: 600 }}>
          A platform that will smoothly integrate into your workstream.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={4} sx={{ mt: isMobile ? "2rem" : "6rem", ml: isMobile ? "3rem" : "0rem" }}>
        <Rating
          name="read-only"
          value={4.5}
          precision={0.5}
          readOnly
          style={{ color: "black", fontSize: isMobile ? "0.6rem" : "1.2rem" }}
        />
        <Typography variant="body1" sx={{ mt: 1, fontSize: ["0.875rem", "1rem"], fontWeight: 600 }} align="left">
          The platform has been able to make
          <br /> insights the easiest thing to get.
        </Typography>
        <Typography variant="caption" sx={{ color: "#5C7C6F", fontSize: ["0.625rem", "0.75rem"], fontWeight: 600 }}>
          Investment Fund Manager
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: isMobile ? "2rem" : "3rem" }}>
        <Stack direction={isMobile ? "column" : "row"} spacing={0} justifyContent="center">
          <Box sx={isMobile ? null : desktopCardWrapperStyle}>
            <Card variant="outlined" sx={{ ...cardStyle, width: isMobile ? "100%" : "350px" }}>
              <CardContent>
                <Image
                  src="/noun-insight-407185221.svg"
                  alt="banner"
                  height={65}
                  width={65}
                  style={imageStyle}
                />
                <Typography variant="h3" align="center" sx={{ fontSize: "2rem", fontWeight: 900 }}>
                  Create
                </Typography>
                <Typography variant="body1" style={{ color: "#5C7C6F", fontSize: "1rem", fontWeight: 600 }}>
                  From any company with another
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ ...cardStyle, width: isMobile ? "100%" : "350px" }}>
              <CardContent>
                <Image
                  src="/noun-insight-4071852.svg"
                  alt="banner"
                  height={65}
                  width={65}
                  style={imageStyle}
                />
                <Typography variant="h3" align="center" sx={{ fontSize: "2rem", fontWeight: 900 }}>
                  Insight
                </Typography>
                <Typography variant="body1" style={{ color: "#5C7C6F", fontSize: "1rem", fontWeight: 600 }}>
                  From any company with another
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ ...cardStyle, width: isMobile ? "100%" : "350px" }}>
              <CardContent>
                <Image
                  src="/noun-insight-4071852-1.svg"
                  alt="banner"
                  height={65}
                  width={65}
                  style={imageStyle}
                />
                <Typography variant="h3" align="center" sx={{ fontSize: "2rem", fontWeight: 900 }}>
                  Report
                </Typography>
                <Typography variant="body1" style={{ color: "#5C7C6F", fontSize: "1rem", fontWeight: 600 }}>
                  From any company with another
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

