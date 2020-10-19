import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/styles";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "3%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    flexBasis: "3%",
    flexShrink: 0,
  },
}));

export const AccordionNote = ({ note }) => {
  const router = useRouter();
  const date = new Date(note?.createdAt).toLocaleDateString();
  const classes = useStyles();
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{note?.user?.username}</Typography>
        <Typography className={classes.secondaryHeading}>{note?.title}</Typography>
        <Typography className={classes.secondaryHeading}>{date}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <h1>{note?.message}</h1>
      </AccordionDetails>
      <AccordionActions>
        {router.pathname === "/mynotes" ? (
          <>
            <Button size="small">Edit</Button>
            <Button size="small" style={{ color: red[500] }}>
              Delete
            </Button>
          </>
        ) : null}
      </AccordionActions>
    </Accordion>
  );
};
