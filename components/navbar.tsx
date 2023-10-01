import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  Tooltip,
  Avatar,
  Menu,
  MenuItem
} from "@mui/material";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SetStateAction, useEffect, useState } from "react";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { logOut } from "@/redux/features/authSlice";
import * as React from 'react'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Navbar(props: any) {
  const { push } = useRouter();
  const pathname = usePathname()
  const supabase = createClientComponentClient();
  const [userDet, setUserDet] = useState({});
  const [user, setUser] = useState(false);
  const userDetails = useAppSelector((state) => state.authReducer.value);
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  useEffect(() => {
    setUser(userDetails as unknown as SetStateAction<boolean>);
    
  }, [userDetails]);  

  const onPricingClick = () => {
    if(pathname !== '/landingPage'){
      push("/landingPage#section7")
    
    }
    props.currRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const Logout = async () => {
    const { error } = await supabase.auth.signOut();
    setUserDet({});
    dispatch(logOut());
  };

  const onFeatureClick = () => {
    if(pathname !== '/landingPage'){
      push("/landingPage#section3")
    
    }
    props.featureRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = async () => {
    await Logout();
    setAnchorElUser(null);
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
          >
            <Image src="/logo AI_dark.png" alt="logo" width={150} height={60} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              ml:"35%"
            }}
          >
            {!isMobile && (
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

          {/* {!userDetails?.email ? (
            <Button
              variant="contained"
              style={{
                backgroundColor: "black",
                color: "white",
                textTransform: "none",
              }}
              onClick={() =>
                userDetails?.email ? Logout() : props.setOpen(true)
              }
            >
              Login
            </Button>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="" >{userDetails.userName?.charAt(0)}</Avatar>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ fontWeight: 600, fontSize: "1.125rem", ml: 2}}
                  >
                    {userDetails.userName}
                  </Typography>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )} */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
