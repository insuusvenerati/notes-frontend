import { Notes as NotesQuery } from "../queries/__generated__/Notes";
import Note from "./Note";

type NotesProps = {
  data: NotesQuery;
};

export const Notes = ({ data }: NotesProps): JSX.Element => {
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
