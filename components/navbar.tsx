import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import Image from "next/image";

export default function Navbar({currRef}: {currRef: any}) {
  const onPricingClick = () => {
    currRef.current?.scrollIntoView({behavior: 'instant'});
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Image src="/logo_black.png" alt="logo" width={110} height={20} />
          </IconButton>
          <Box
            sx={{
              display: "inline-flex",
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
            <Typography variant="h6" component="div" sx={{ p: 1, mr: 4 }}>
              Blog
            </Typography>
            <Typography variant="h6" component="div" sx={{ p: 1, ml: 4, cursor: "pointer" }} onClick={onPricingClick}>
              Pricing
            </Typography>
          </Box>
          <Button
            variant="contained"
            style={{
              backgroundColor: "black",
              color: "white",
              textTransform: "none",
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
