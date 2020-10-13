import Note from "./Note";

export const Notes = ({ data }) => {
  return (
    <>
      {data &&
        data.map((note) => {
          return <Note note={note} key={note?.id} />;
        })}
    </>
  );
};
