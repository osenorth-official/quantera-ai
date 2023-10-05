import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SetStateAction } from "react";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { logOut } from "@/redux/features/authSlice";

export default function Navbar(props: any) {
  const { push } = useRouter();
  const pathname = usePathname();
  const supabase = createClientComponentClient();
  const [user, setUser] = useState(false);
  const userDetails = useAppSelector((state) => state.authReducer.value);
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  useEffect(() => {
    setUser(userDetails as unknown as SetStateAction<boolean>);
  }, [userDetails]);

  const onPricingClick = () => {
    if (pathname !== "/landingPage") {
      push("/landingPage#section7");
    }
    props.currRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onFeatureClick = () => {
    if (pathname !== "/landingPage") {
      push("/landingPage#section3");
    }
    props.featureRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const Logout = async () => {
    await supabase.auth.signOut();
    dispatch(logOut());
  };

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
            onClick={() => push("/landingPage")}
            style={{ backgroundColor: "transparent", boxShadow: "none" }}
            
          >
            <Image src="/logo AI_dark.png" alt="logo" width={150} height={60} unoptimized/>
          </IconButton>
          <Box
            style={{ backgroundColor: "transparent" }}
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              ml: "35%",
            }}
          >
            {isMobile ? (
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                sx={{ ml: "auto" }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ p: 1, mr: 4, ml: -14, cursor: "pointer" }}
                  onClick={onFeatureClick}
                >
                  Features
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ p: 1, mr: 3, ml: 3, cursor: "pointer" }}
                  onClick={onPricingClick}
                >
                  Pricing
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ p: 1, ml: 4, cursor: "pointer" }}
                  onClick={() => push("/blog")}
                >
                  Blog
                </Typography>
              </>
            )}
          </Box>
        </Toolbar>
        {/* Responsive hamburger menu */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          <MenuItem onClick={() => { handleCloseNavMenu(); onFeatureClick(); }}>Features</MenuItem>
          <MenuItem onClick={() => { handleCloseNavMenu(); onPricingClick(); }}>Pricing</MenuItem>
          <MenuItem onClick={() => { handleCloseNavMenu(); push("/blog"); }}>Blog</MenuItem>
        </Menu>
      </AppBar>
    </Box>
  );
}
