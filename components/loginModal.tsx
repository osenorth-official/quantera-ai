import {
  Grid,
  Modal,
  Paper,
  Typography,
  Button,
  Stack,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { logIn } from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from 'next/link';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function LoginModal(props: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signup, setSignup] = useState(false);
  const [name, setName] = useState("");
  const supabase = createClientComponentClient();
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
  }, [signup]);

  const onSubmitClick = async () => {
    if (signup) {
      try {
        if (name === "") {
          setNameError(true);
          return;
        }
        if (email === "") {
          setEmailError(true);
          return;
        }
        if (password === "") {
          setPasswordError(true);
          return;
        }

        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            data: {
              name: name,
            },
          },
        });
        console.log("Data: ", data);
      } catch (err) {
        console.log("error: ", err);
      }
    } else {
      try {
        if (email === "") {
          setEmailError(true);
          return;
        }
        if (password === "") {
          setPasswordError(true);
          return;
        }
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });
        props.handleClose();
        const tempData = {
          email: data.user!.email,
          userName: data.user!.user_metadata.name,
        };
        dispatch(logIn(tempData));
      } catch (err) {
        console.log("Error while signing in");
      }
    }
  };

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper sx={style}>
        <Grid container>
          <CloseIcon
            sx={{ ml: "auto", cursor: "pointer" }}
            onClick={props.handleClose}
          />
          <Grid item xs={12} sx={{ mt: 5 }}>
            <Typography
              variant="h2"
              align="center"
              sx={{ fontWeight: 700, fontSize: "3.125rem" }}
            >
              {signup
                ? "Create an account to get started"
                : "Login to get started"}
            </Typography>
          </Grid>
          {signup ? (
            <Grid item xs={12} sx={{ mt: 5 }}>
              <Typography
                variant="h2"
                align="center"
                sx={{ fontWeight: 600, fontSize: "1.5rem" }}
              >
                Get started for free
              </Typography>
            </Grid>
          ) : null}
          <Grid
            item
            xs={12}
            justifyContent={"center"}
            display={"flex"}
            sx={{ mt: 5 }}
          >
            <Stack direction={"row"} spacing={2}>
              <Button
                variant="outlined"
                startIcon={
                  <Image
                    src="/google-color-icon.svg"
                    alt={"Google"}
                    height={30}
                    width={30}
                  />
                }
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.094rem",
                    textTransform: "none",
                    color: "black",
                  }}
                >
                  Sign in with Google
                </Typography>
              </Button>
              <Button
                variant="contained"
                sx={{
                  fontWeight: 700,
                  fontSize: "1.094rem",
                  textTransform: "none",
                  color: "white",
                }}
                style={{ backgroundColor: "#6787E7" }}
                startIcon={
                  <Image
                    src="/discord-mark-white.svg"
                    alt={"Google"}
                    height={30}
                    width={30}
                  />
                }
              >
                Login in with Discord
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} justifyContent={"center"} display={"flex"}>
            <Divider sx={{ color: "#979797", width: "70%", mt: 2, mb: 3 }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 500, fontSize: "1.25rem" }}
              >
                Or continue with
              </Typography>
            </Divider>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justifyContent={"center"}
            display={"flex"}
            sx={{ mb: 5 }}
          >
            <Stack direction={"column"} spacing={2} width={"70%"}>
              {signup ? (
                <TextField
                  id="outlined-basic"
                  label={
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 700, fontSize: "1.5rem" }}
                    >
                      Full name
                    </Typography>
                  }
                  variant="outlined"
                  fullWidth
                  error={nameError}
                  helperText={nameError ? "Please enter name." : ""}
                  value={name}
                  onChange={({ target }) => {
                    setNameError(false);
                    setName(target.value);
                  }}
                  InputProps={{
                    style: { fontWeight: 500, fontSize: "1.25rem" },
                  }}
                />
              ) : null}
              <TextField
                id="outlined-basic"
                label={
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 700, fontSize: "1.5rem" }}
                  >
                    Email
                  </Typography>
                }
                variant="outlined"
                fullWidth
                error={emailError}
                helperText={emailError ? "Please enter a valid email." : ""}
                value={email}
                onChange={({ target }) => {
                  setEmailError(false);
                  setEmail(target.value);
                }}
                InputProps={{ style: { fontWeight: 500, fontSize: "1.25rem" } }}
              />
              <TextField
                id="outlined-basic"
                label={
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 700, fontSize: "1.5rem" }}
                  >
                    Password
                  </Typography>
                }
                variant="outlined"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={({ target }) => {
                  setPasswordError(false);
                  setPassword(target.value);
                }}
                sx={{ justifyContent: "center" }}
                error={emailError}
                helperText={emailError ? "Please enter a password." : ""}
                InputProps={{
                  style: { fontWeight: 500, fontSize: "1.25rem" },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <RemoveRedEyeOutlinedIcon />
                        ) : (
                          <VisibilityOffOutlinedIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {signup ? (
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.125rem",
                    color: "#6D7385",
                    mb: 5,
                  }}
                >
                  By clicking on signup, you are agreeing to the{" "}
                  <span
                    style={{
                      color: "#6787E7",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  ><Link href="/tnc" target="_blank">
                    terms and conditions
                    </Link>
                  </span>
                </Typography>
              ) : (
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.125rem",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={props.openForgot}
                >
                  Forgot my password
                </Typography>
              )}
              <Button
                variant="contained"
                sx={{
                  fontWeight: 700,
                  fontSize: "1.094rem",
                  textTransform: "none",
                  color: "black",
                }}
                style={{ backgroundColor: "#73F3C4" }}
                disableElevation
                onClick={onSubmitClick}
              >
                {signup ? "Signup" : "Login"}
              </Button>
              <Typography
                variant="body1"
                align="center"
                sx={{ fontWeight: 600, fontSize: "1.125rem", color: "#6D7385" }}
              >
                Dont have an account?{" "}
                <span
                  style={{
                    color: "#6787E7",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={() => setSignup(!signup)}
                >
                  {!signup ? "Signup" : "Login"} here instead
                </span>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
}
