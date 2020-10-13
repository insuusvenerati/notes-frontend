/* eslint-disable react/display-name */
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { DynamicNotes } from "components/DynamicComponents";
import { authClient } from "context/apollo";
import { NotesContext } from "context/notes";
import Fuse from "fuse.js";
import { useDebounce } from "hooks/useDebounce";
import { GET_NOTES } from "queries/notes";
import { useContext } from "react";
import { useCookies } from "react-cookie";

const NotesPage = () => {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const { data, error, loading } = useQuery(GET_NOTES, {
    client: authClient,
  });
  const { searchInput } = useContext(NotesContext);
  const debouncedSearchInput = useDebounce(searchInput, 500);

  const fuse = new Fuse(data && data.notes, {
    keys: ["user.username", "message", "title"],
  });

  if (loading && !data) return <CircularProgress />;
  if (!token) return <Alert severity="error">Please log in</Alert>;
  if (error) return <h1>Error: {JSON.stringify(error, null, 2)}</h1>;

  const results = !loading && fuse.search(debouncedSearchInput);
  const searchResults = debouncedSearchInput ? results.map((result) => result.item) : data.notes;

  return <DynamicNotes data={searchResults} />;
};

export default NotesPage;
