import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from '../app/styles1.module.css';
import { Margin } from "@mui/icons-material";

export default function CustomAccordion(props: any) {
  const linkStyle: React.CSSProperties = {
    color: "purple",
    // Additional styles if needed
  };
  const item = props.questionItem
  return (
    <Accordion
      sx={{ bgcolor: "#F5F6F6", boxShadow: "none", maxWidth: "80%", mt: 2 }}
      
    >
      <AccordionSummary
        expandIcon={<AddIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{fontSize: "1.375rem", fontWeight: 600}}>{item.question}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ mr: 10 }}>
        <Typography sx={{fontSize: "1.125rem", fontWeight: 300}}>
         {item.answer} <br />
         {item.email ?  <a href="mailto:contact@quantera.com" style={linkStyle}>
        {item.email}
      </a> : null}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
