import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import { useContext } from "react";
import { NotesContext } from "../context/notes";

const PREFIX = 'AccordionNote';

const classes = {
  heading: `${PREFIX}-heading`,
  secondaryHeading: `${PREFIX}-secondaryHeading`
};

const StyledAccordion = styled(Accordion)((
  {
    theme
  }
) => ({
  [`& .${classes.heading}`]: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "3%",
    flexShrink: 0,
  },

  [`& .${classes.secondaryHeading}`]: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    flexBasis: "3%",
    flexShrink: 0,
  }
}));

export const AccordionNote = ({ note }) => {
  const router = useRouter();
  const date = new Date(note?.created_at).toLocaleDateString();

  const { handleDeleteNote } = useContext(NotesContext);
  return (
    <StyledAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>
          {note?.user?.username}
        </Typography>
        <Typography className={classes.secondaryHeading}>
          {note?.title}
        </Typography>
        <Typography className={classes.secondaryHeading}>{date}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <h1>{note?.message}</h1>
      </AccordionDetails>
      <AccordionActions>
        {router.pathname === "/mynotes" ? (
          <>
            <Button size="small">Edit</Button>
            <Button
              onClick={() => handleDeleteNote(note?.id)}
              size="small"
              style={{ color: red[500] }}
            >
              Delete
            </Button>
          </>
        ) : null}
      </AccordionActions>
    </StyledAccordion>
  );
};
