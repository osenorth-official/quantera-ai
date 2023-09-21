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
  Stack,
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
        ml: "7%",
        mt: 10,
        minWidth: 650,
        maxWidth: "85vw",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 5,
        p: 5.2,
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell ><Typography variant="body1" sx={{ fontSize:"1.375rem", fontWeight: 600}}>Plans</Typography></TableCell>
            <TableCell width={"25%"}>
              <Typography variant="h6" sx={{ fontSize:"2rem", fontWeight: 900}}>Free</Typography>
            </TableCell>
            <TableCell width={"25%"}>
              <Typography variant="h6" sx={{ fontSize:"2rem", fontWeight: 900}}>Premium</Typography>
            </TableCell>
            <TableCell width={"25%"}>
              <Typography variant="h6" sx={{ fontSize:"2rem", fontWeight: 900}}>Pro</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell >
            <Typography variant="body1" sx={{ fontSize:"1.375rem", fontWeight: 600}}>Pricing</Typography>
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
              <Typography variant="h4" sx={{ fontSize: "3.125rem", fontWeight: 900}}>
                <span style={{ fontSize: "2rem", fontWeight: 900, position:"relative",bottom: 10 }}>$</span> 0
              </Typography>
              <Typography variant="caption" sx={{ fontSize: "0.875rem", fontWeight: 600, ml: 4}}>/year</Typography>
              <Typography variant="body1" sx={{ mt: 2, fontSize: "1.375rem", fontWeight: 500 }}>
                Base features that covers 80%+ of the platform.
              </Typography>
              <Stack sx={{mt: 6}}>
              <Button
                variant="contained"
                fullWidth
                style={{
                  backgroundColor: "#73F3C4",
                  color: "black",
                  textTransform: "none",
                  marginTop: 4,
                  fontSize: "1rem",
                  fontWeight: 900,
                  paddingTop: 5
                }}
                disableElevation
              >
                Get Started
              </Button>
              </Stack>
            </TableCell>
            <TableCell>
              <Typography variant="h4" sx={{ fontSize: "3.125rem", fontWeight: 900}} >
                <span style={{ fontSize: "2rem", fontWeight: 900, position:"relative",bottom: 10}}>$</span> 199
              </Typography>
              <Typography variant="caption" sx={{ fontSize: "0.875rem", fontWeight: 600, ml: 4}}>/year</Typography>
              <Typography variant="body1" sx={{ mt: 2, fontSize: "1.375rem", fontWeight: 500 }}>
                Listen to live earnings all in one spot and insights delivered
                to you.
              </Typography>
              <Stack sx={{mt: 2}}>
              <Button
                variant="contained"
                fullWidth
                style={{
                  backgroundColor: "#73F3C4",
                  color: "black",
                  textTransform: "none",
                  marginTop: 4,
                  fontSize: "1rem",
                  fontWeight: 900
                }}
                disableElevation
              >
                Get Started
              </Button>
              </Stack>
            </TableCell>
            <TableCell>
              <Typography variant="h4" sx={{ fontSize: "3.125rem", fontWeight: 900}}>Signup</Typography>
              <Typography variant="body1" sx={{ mt: 4, fontSize: "1.375rem", fontWeight: 500 }}>
                Talk to 30 years of financial data, signup to be the first know.
              </Typography>
              <Stack sx={{mt: 2.5}}>
              <Button
                variant="contained"
                fullWidth
                style={{
                  backgroundColor: "#73F3C4",
                  color: "black",
                  textTransform: "none",
                  marginTop: 4,
                  fontSize: "1rem",
                  fontWeight: 900
                }}
                disableElevation
                endIcon={<ArrowForwardIcon />}
              >
                Early Access
              </Button>
              </Stack>
            </TableCell>
          </TableRow>
          {tableData.map((item, index) => (
            <TableRow key={index}>
              <TableCell> <Typography variant="body1" sx={{fontSize: "1.125rem", fontWeight: 600 }}>{item.first}</Typography></TableCell>
              <TableCell><Typography variant="body1" sx={{fontSize: "1rem", fontWeight: 600 }}>{item.second}</Typography></TableCell>
              <TableCell><Typography variant="body1" sx={{fontSize: "1rem", fontWeight: 600 }}>{item.third}</Typography></TableCell>
              <TableCell><Typography variant="body1" sx={{fontSize: "1rem", fontWeight: 600 }}>{item.fourth}</Typography></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
