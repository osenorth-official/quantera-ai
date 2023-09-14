import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Button,
} from "@mui/material";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

const tableData = [
  {
    first: "AI Powered",
    second: <CloseIcon />,
    third: <CloseIcon />,
    fourth: <CheckIcon />,
  },
  {
    first: "Full company fundamentals",
    second: <CheckIcon />,
    third: <CheckIcon />,
    fourth: <CheckIcon />,
  },
  {
    first: "Earnings view",
    second: "1 week view",
    third: "Complete",
    fourth: "Complete",
  },
  {
    first: "News",
    second: <CheckIcon />,
    third: <CheckIcon />,
    fourth: <CheckIcon />,
  },
  {
    first: "3 years fundamentals history",
    second: <CheckIcon />,
    third: <CheckIcon />,
    fourth: <CheckIcon />,
  },
  {
    first: "Super investor",
    second: <CheckIcon />,
    third: <CheckIcon />,
    fourth: <CheckIcon />,
  },
  {
    first: "Listen to earnings call",
    second: "-",
    third: <CheckIcon />,
    fourth: <CheckIcon />,
  },
  {
    first: "Custom Reports",
    second: "-",
    third: <CheckIcon />,
    fourth: <CheckIcon />,
  },
  {
    first: "5y+ historical data",
    second: "-",
    third: <CheckIcon />,
    fourth: <CheckIcon />,
  },
  {
    first: "Calendar Sync",
    second: "-",
    third: <CheckIcon />,
    fourth: <CheckIcon />,
  },
  {
    first: "Share Report",
    second: "-",
    third: <CheckIcon />,
    fourth: <CheckIcon />,
  },
  {
    first: "Earnings to inbox",
    second: "-",
    third: <CheckIcon />,
    fourth: <CheckIcon />,
  },
];

export default function CustomTable() {
  const [alignment, setAlignment] = useState("Annually");

  return (
    <TableContainer
      component={Paper}
      sx={{
        ml: "13%",
        mt: 10,
        minWidth: 650,
        maxWidth: "75vw",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 5,
        p: 4,
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Plans</TableCell>
            <TableCell>
              <Typography variant="h6">Free</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Premium</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Pro</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              Pricing
              <br />
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={(_, val) => setAlignment(val)}
                sx={{ m: 5, borderRadius: 15 }}
              >
                <ToggleButton value="Monthly">Monthly</ToggleButton>
                <ToggleButton value="Annually">Annually</ToggleButton>
              </ToggleButtonGroup>
            </TableCell>
            <TableCell>
              <Typography variant="h4">
                <span style={{ fontSize: 20 }}>$</span> 0
              </Typography>
              <Typography variant="caption">/year</Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Base features that covers 80%+ of the platform.
              </Typography>
              <Button
                variant="contained"
                fullWidth
                style={{
                  backgroundColor: "#73F3C4",
                  color: "black",
                  textTransform: "none",
                  marginTop: 4,
                }}
              >
                Get Started
              </Button>
            </TableCell>
            <TableCell>
              <Typography variant="h4">
                <span style={{ fontSize: 20 }}>$</span> 199
              </Typography>
              <Typography variant="caption">/year</Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Listen to live earnings all in one spot and insights delivered
                to you.
              </Typography>
              <Button
                variant="contained"
                fullWidth
                style={{
                  backgroundColor: "#73F3C4",
                  color: "black",
                  textTransform: "none",
                  marginTop: 4,
                }}
              >
                Get Started
              </Button>
            </TableCell>
            <TableCell>
              <Typography variant="h4">Signup</Typography>
              <Typography variant="body1" sx={{ mt: 3 }}>
                Talk to 30 years of financial data, signup to be the first know.
              </Typography>
              <Button
                variant="contained"
                fullWidth
                style={{
                  backgroundColor: "#73F3C4",
                  color: "black",
                  textTransform: "none",
                  marginTop: 4,
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Early Access
              </Button>
            </TableCell>
          </TableRow>
          {tableData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.first}</TableCell>
              <TableCell>{item.second}</TableCell>
              <TableCell>{item.third}</TableCell>
              <TableCell>{item.fourth}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
