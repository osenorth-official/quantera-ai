import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function CustomAccordion(props: any) {
  return (
    <Accordion
      sx={{ bgcolor: "#F5F6F6", boxShadow: "none", maxWidth: "80%", mt: 2 }}
      
    >
      <AccordionSummary
        expandIcon={<AddIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{props.question}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ mr: 10 }}>
        <Typography>
          Of course, we are always happy to hear from people who have ideas!
          Send them along to <br />
          <a href="mailto:contact@quantera.com">contact@quantera.com</a>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
