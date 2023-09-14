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
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ mt: 10 }}>
        <Typography variant="h3" align="center">
          Are you a professional or a student <br /> looking for bulk licenses?
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 5 }}>
        <Typography variant="body1" align="center">
          Student must be enrolled in a university program and <br /> be able to
          show proof of enrolment.
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 5, ml: "45%" }}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#73F3C4",
            color: "black",
            textTransform: "none",
          }}
          endIcon={<ArrowForwardIcon />}
        >
          Get in touch
        </Button>
      </Grid>
      <Grid container item xs={12} sx={{ mt: 7, ml: 20 }}>
        <Grid item xs={6}>
          <Typography variant="h4" align="left">
            Frequently asked questions?
          </Typography>
          <Typography variant="body1" align="left" sx={{ mt: 2 }}>
            We assembled some of the most common <br /> questions
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <CustomAccordion question="Can I cancel my subscription anytime?" expanded={false}/>
          <CustomAccordion question="Do you use my data for anything?" expanded={false}/>
          <CustomAccordion question="I would like to request a feature!" expanded={true}/>
          <CustomAccordion question="When does my discount apply?" expanded={false}/>
          
        </Grid>
      </Grid>
    </Grid>
  );
}
