import { useState } from "react";
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
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

export default function ForgotPasswordModal(props: any) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper sx={style}>
        <Grid container>
        <ArrowBackIcon
            sx={{ mr: "auto", cursor: "pointer" }}
            onClick={props.handleBack}
          />
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
              Forgot password
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: 5 }}>
            <Typography
              variant="h2"
              align="center"
              sx={{ fontWeight: 500, fontSize: "1.125rem" }}
            >
              Enter your email to reset your password
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justifyContent={"center"}
            display={"flex"}
            sx={{ mb: 15, mt: 15 }}
          >
            <Stack direction={"column"} spacing={2} width={"70%"}>
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
                onClick={() => console.log("Forgot Passowrd clicked")}
              >
                Reset Password
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
}
