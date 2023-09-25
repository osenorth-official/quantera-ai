import { Snackbar, Typography, IconButton } from "@mui/material";
import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function CustomSnackbar(props: any) {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    props.setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={3000}
      onClose={handleClose}
      message={
        <Typography
          variant="body1"
          sx={{ fontSize: "1.625rem", fontWeight: 700 }}
        >
          {props.message}
        </Typography>
      }
      action={action}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    />
  );
}
