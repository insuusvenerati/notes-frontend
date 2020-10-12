import { NoteFromSearch, NotesContext } from "context/notes";
import { useContext } from "react";
import { Notes as NotesQuery } from "../queries/__generated__/Notes";
import Note from "./Note";

type NotesProps = {
  data: NotesQuery;
};

export const Notes = ({ data }: NotesProps): JSX.Element => {
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
