/* eslint-disable react/display-name */
import { useQuery } from "@apollo/client";
import { Alert } from "@material-ui/lab";
import { DynamicError, DynamicNotes } from "components/DynamicComponents";
import { SelectComponent } from "components/UserSelect";
import { authClient } from "context/apollo";
import { NoteFromSearch, NotesContext } from "context/notes";
import Fuse from "fuse.js";
import { GET_NOTES } from "queries/notes";
import { Notes as NotesQuery } from "queries/__generated__/Notes";
import { useContext, useEffect } from "react";
import { useCookies } from "react-cookie";

const NotesPage = (): JSX.Element => {
  const [cookies] = useCookies(["id"]);
  const { data, error } = useQuery<NotesQuery>(GET_NOTES, { client: authClient });
  const { searchInput, searchResults, setSearchResults } = useContext(NotesContext);

  const fuse = new Fuse<any>(data?.notes as any, {
    keys: ["user.username", "message", "title"],
  });

  useEffect(() => {
    if (searchInput) {
      setSearchResults(fuse.search(searchInput) as any);
      console.log(searchResults);
    }
    if (!searchInput) {
      setSearchResults([] as any);
    }
  }, [data, searchInput]);

  const users = data?.notes?.map((note) => note?.user);

  if (!cookies.id) return <Alert severity="error"> Please sign in </Alert>;

  if (error) {
    return (
      <>
        <SelectComponent users={users} />
        <DynamicError error={error} />
      </>
    );
  }

  if (searchResults.length > 0) {
    return (
      <>
        <SelectComponent users={users} />
        <DynamicNotes data={searchResults} />
      </>
    );
  }
  // if (filteredNotes) {
  //   return (
  //     <>
  //       <SelectComponent users={users} />
  //       <DynamicNotes data={filteredNotes} />
  //     </>
  //   );
  // }

  return (
    <>
      {data && (
        <>
          <SelectComponent users={users} />
          <DynamicNotes data={data} />
        </>
      )}
    </>
  );
};

export default NotesPage;
