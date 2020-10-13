import { useQuery } from "@apollo/client";
import { CircularProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { DynamicNotes } from "components/DynamicComponents";
import { NotesContext } from "context/notes";
import Fuse from "fuse.js";
import { useDebounce } from "hooks/useDebounce";
import { GET_USER_NOTE } from "queries/notes";
import { useContext } from "react";
import { useCookies } from "react-cookie";
import { authClient } from "../src/apollo";

const MyNotes = () => {
  const [cookies] = useCookies(["id"]);
  const userId = cookies.id;
  const { data, error, loading } = useQuery(GET_USER_NOTE, {
    client: authClient,
    variables: { id: userId },
  });
  const { searchInput } = useContext(NotesContext);
  const debouncedSearchInput = useDebounce(searchInput, 500);

  const fuse = new Fuse(data && data.notes, {
    keys: ["user.username", "message", "title"],
  });

  if (loading) return <CircularProgress />;
  if (!cookies.token) return <Alert severity="error">Please log in</Alert>;
  if (error) return <h1>Error: {JSON.stringify(error, null, 2)}</h1>;

  const results = !loading && fuse.search(debouncedSearchInput);
  const searchResults = debouncedSearchInput ? results.map((result) => result.item) : data.notes;

  return <DynamicNotes search={false} data={searchResults} />;
};

export default MyNotes;
