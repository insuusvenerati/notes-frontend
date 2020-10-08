import { useQuery } from "@apollo/client";
import { Alert } from "@material-ui/lab";
import { Notes } from "components/Notes";
import { authClient } from "context/apollo";
import { NotesContext } from "context/notes";
import { GET_USER_NOTE } from "queries/notes";
import { UserNote, UserNoteVariables } from "queries/__generated__/UserNote";
import { useContext } from "react";
import { useCookies } from "react-cookie";

const MyNotes = (): JSX.Element => {
  const [cookies] = useCookies(["id"]);
  const { data } = useQuery<UserNote, UserNoteVariables>(GET_USER_NOTE, {
    client: authClient,
    variables: { id: cookies.id },
  });
  const { data: searchData } = useContext(NotesContext);

  if (!cookies.id) return <Alert severity="error"> Please sign in </Alert>;

  if (searchData) {
    return (
      <>
        <Notes data={searchData} />
      </>
    );
  }

  return <>{data && <Notes data={data} />}</>;
};

export default MyNotes;
