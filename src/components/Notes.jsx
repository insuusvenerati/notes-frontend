import { AccordionNote } from "./AccordionNote";

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
