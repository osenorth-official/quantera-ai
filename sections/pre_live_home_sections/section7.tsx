import {
  Grid,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import CustomAccordion from "@/components/customAccordion";

export default function Section7() {
  return (
    <Grid container spacing={2} sx={{ padding: "16px" }}>
      <Grid item xs={12} sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h3" align="center" sx={{ fontSize: { xs: "3.5rem", md: "5.125rem" }, fontWeight: 900 }}>
          Are you a professional or a student <br /> looking for bulk licenses?
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 2, textAlign: "center" }}>
        <Typography variant="body1" align="center" sx={{ fontSize: { xs: "1.125rem", md: "1.5rem" }, fontWeight: 600 }}>
          Student must be enrolled in a university program and <br /> be able to show proof of enrolment.
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 3, textAlign: "center" }}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#73F3C4",
            color: "black",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 900
          }}
          endIcon={<ArrowForwardIcon />}
          disableElevation
        >
          Get in touch
        </Button>
      </Grid>
      <Grid container item xs={12} sx={{ mt: 5 , ml: 10}}>
        <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" , ml:46} }}>
          <Typography variant="h4" align="left" sx={{ fontSize: { xs: "2rem", md: "2.625rem", ml: "5rem" }, fontWeight: 900 }}>
            Frequently asked questions?
          </Typography>
          <Typography variant="body1" align="left" sx={{ mt: 2, fontSize: { xs: "1rem", md: "1.2rem" }, fontWeight: 500 }}>
            We assembled some of the most common <br /> questions
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomAccordion question="Can I cancel my subscription anytime?" />
          <CustomAccordion question="Do you use my data for anything?" />
          <CustomAccordion question="I would like to request a feature!" />
          <CustomAccordion question="When does my discount apply?" />
        </Grid>
      </Grid>
    </Grid>
  );
}
