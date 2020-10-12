import { NotesContext } from "context/notes";
import { useContext } from "react";
import Note from "./Note";

export const Notes = ({ data }) => {
  const { searchResults } = useContext(NotesContext);

  if (searchResults.length > 0) {
    return (
      <>
        {data &&
          data.map((note) => {
            return <Note note={note.item} key={note?.id} />;
          })}
      </>
    );
  }

  return (
    <>
      {data &&
        data.notes &&
        data.notes.map((note) => {
          return <Note note={note} key={note?.id} />;
        })}
    </>
  );
};
