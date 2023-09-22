import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function Navbar(props: any) {
  const { push } = useRouter();
  const supabase = createClientComponentClient();
  const [userDet, setUserDet] = useState({});
  const [user, setUser] = useState(false);

  useEffect(() => {
    console.log(userDet);
    supabase.auth
      .getUser()
      .then((data) => {
        if (!data.error) {
          setUserDet(data);
          setUser(true);
          console.log(data);
        }
      })
      .catch((err) => console.log("error"));
  }, []);

  const onPricingClick = () => {
    props.currRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const Logout = async () => {
    const { error } = await supabase.auth.signOut();
    setUserDet({});
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
              display: "inline-flex",
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ p: 1, mr: 4, ml: -14, cursor: "pointer" }}
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
          </Box>

          <Button
            variant="contained"
            style={{
              backgroundColor: "black",
              color: "white",
              textTransform: "none",
            }}
            onClick={() => (user ? Logout() : props.setOpen(true))}
          >
            {user ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
