import { useContext } from "react";
import { Error } from "components/Error";
import { Notes } from "components/Notes";
import { NotesContext } from "context/notes";

const Search = () => {
  const { data, error } = useContext(NotesContext);

  return (
    <>
      {error && <Error error={error} />}
      {data && <Notes data={data} />}
    </>
  );
};

export default Search;
