import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "../app/styles1.module.css";
import { Margin } from "@mui/icons-material";

interface ColumnProps {
  label: string;
  price: string;
  description: string;
  buttonText: string;
  buttonIcon?: boolean;
}

export default function CustomTable() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [alignment, setAlignment] = useState("Annually");

  const toggleColorMode = () => {
    setIsDarkMode((prev) => !prev);
    setAlignment(isDarkMode ? "Monthly" : "Annually");
  };

  const renderColumn = ({
    label,
    price,
    description,
    buttonText,
    buttonIcon,
  }: ColumnProps) => {
    const showDollarSign = label === "Free" || label === "Premium";
    return (
        <Grid item xs={12} sm={6} md={4} sx={{ mt: 1 }}> {/* Add vertical spacing here */}       
         <Paper
          variant="outlined"
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            border: "2px solid",
            boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.2)",
            marginLeft: "2rem",
            marginRight: "2rem",
            borderRadius : '8px',
            textAlign: 'center',
            gap: "1rem"
          }}
        >
          <Typography variant="h5" fontWeight={600}>{label}</Typography>
          <Typography variant="h4">
          {showDollarSign && (
            <span style={{ fontSize: "2rem", fontWeight: 700 }}>$</span>
          )}{" "}
          {price}
          </Typography>
          <Typography variant="body1">{description}</Typography>
          <Stack sx={{ mt: 2 }}>
            <Button
              variant="contained"
              fullWidth
              style={{
                backgroundColor: "#73F3C4",
                color: "black",
                textTransform: "none",
                marginTop: 2,
                fontSize: "1rem",
                fontWeight: 800,
                minWidth: '60vw',
              }}
              disableElevation
              endIcon={buttonIcon ? <ArrowForwardIcon /> : null}
            >
              {buttonText}
            </Button>
          </Stack>
        </Paper>
      </Grid>
    );
  };

  return (
    <div style={{display:"flex", flexDirection:"column", marginTop: '3rem'}}>
      <div className={styles.container}>
        <label className={`${styles.switch} ${isDarkMode ? styles.darkMode : ""}`}>
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            value="1"
            checked={isDarkMode}
            onChange={toggleColorMode}
          />
          <label
            htmlFor="color_mode"
            data-on="Annually"
            data-off="Monthly"
            className={styles.switchInner}
          ></label>
        </label>
      </div>
      <Grid container spacing={3} >
        {renderColumn({
          label: "Free",
          price: "0",
          description: "Base features that cover 80%+ of the platform.",
          buttonText: "Get Started",
        })}
        {renderColumn({
          label: "Premium",
          price: alignment === "Annually" ? "199" : "20",
          description: "Listen to live earnings all in one spot and insights delivered to you.",
          buttonText: "Get Started",
        })}
        {renderColumn({
          label: "Pro",
          price:'Signup' ,
          description: "Talk to 30 years of financial data, sign up to be the first to know.",
          buttonText: "Early Access",
          buttonIcon: true,
        })}
      </Grid>
    </div>
  );
}
