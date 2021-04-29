import { CircularProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Notes } from "components/Notes";
import { NotesContext } from "context/notes";
import Fuse from "fuse.js";
import { useDebounce } from "hooks/useDebounce";
import { useContext } from "react";
import { useCookies } from "react-cookie";

const MyNotes = () => {
  const [cookies] = useCookies(["id"]);
  const { searchInput, userNotes: data, userNotesError: error, userNotesLoading: loading } = useContext(NotesContext);
  const debouncedSearchInput = useDebounce(searchInput, 500);

  const fuse = new Fuse(data && data.notes, {
    keys: ["user.username", "message", "title"],
  });

  if (loading) return <CircularProgress />;
  if (!cookies.token) return <Alert severity="error">Please log in</Alert>;
  if (error) return <h1>Error: {JSON.stringify(error, null, 2)}</h1>;

  const results = !loading && fuse.search(debouncedSearchInput);
  const searchResults = debouncedSearchInput ? results.map((result) => result.item) : data.notes;

  return <Notes data={searchResults} />;
};

export default MyNotes;
