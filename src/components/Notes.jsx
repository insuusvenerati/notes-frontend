import { Accordion } from "@material-ui/core";
import { AccordionNote } from "./AccordionNote";
import Note from "./Note";

export const Notes = ({ data }) => {
  return (
    <>
      {data &&
        data.map((note) => {
          return <AccordionNote note={note} key={note?.id} />;
        })}
    </>
  );
};
