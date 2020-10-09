/* eslint-disable react/display-name */
import { useQuery } from "@apollo/client";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { DynamicError, DynamicNotes } from "components/DynamicComponents";
import { authClient } from "context/apollo";
import { NotesContext } from "context/notes";
import { GraphQLClient } from "graphql-request";
import Cookies from "js-cookie";
import { GetStaticProps } from "next";
import { GET_NOTES } from "queries/notes";
import { Notes as NotesQuery } from "queries/__generated__/Notes";
import { useContext } from "react";
import { useCookies } from "react-cookie";

type NotesProps = {
  data: NotesQuery;
};

const SelectComponent = (): JSX.Element => (
  <FormControl style={{ minWidth: 120, marginLeft: 5, marginBottom: 5 }}>
    <InputLabel>Name</InputLabel>
    <Select autoComplete="false">
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
);

const NotesPage = ({ data: notes }: NotesProps): JSX.Element => {
  const [cookies] = useCookies(["id"]);
  const { data, error } = useQuery<NotesQuery>(GET_NOTES, { client: authClient });
  const { data: searchData } = useContext(NotesContext);

  if (!cookies.id) return <Alert severity="error"> Please sign in </Alert>;

  if (error) {
    return (
      <>
        <SelectComponent />
        <DynamicError error={error} />
      </>
    );
  }
  if (searchData) {
    return (
      <>
        <SelectComponent />
        <DynamicNotes data={searchData} />
      </>
    );
  }
  if (notes) {
    const token = Cookies.get("token");
    return (
      <>
        <SelectComponent />
        {token && <DynamicNotes data={notes} />}
      </>
    );
  }

  return (
    <>
      {data && (
        <>
          <SelectComponent /> <DynamicNotes data={data} />
        </>
      )}
    </>
  );
};

export default NotesPage;

export const getStaticProps: GetStaticProps = async () => {
  const token = Cookies.get("token");
  const graphQLClient = new GraphQLClient(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  let data: NotesQuery;
  try {
    data = await graphQLClient.request<NotesQuery>(GET_NOTES);
  } catch (error) {
    return {
      props: {},
    };
  }

  return {
    props: { data },
  };
};
