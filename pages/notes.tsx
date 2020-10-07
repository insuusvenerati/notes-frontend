/* eslint-disable react/display-name */
import { useQuery } from "@apollo/client";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { DynamicError, DynamicNotes } from "components/DynamicComponents";
import { NotesContext } from "context/notes";
import { request } from "graphql-request";
import { GetStaticProps } from "next";
import { GET_NOTES } from "queries/notes";
import { Notes as NotesQuery, Notes_notes } from "queries/__generated__/Notes";
import { useContext } from "react";

type NotesProps = {
  data: NotesQuery;
};

const SelectComponent = (): JSX.Element => (
  <FormControl style={{ minWidth: 120, marginLeft: 5, marginBottom: 5 }}>
    <InputLabel>Name</InputLabel>
    <Select>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
);

const NotesPage = ({ data: notes }: NotesProps): JSX.Element => {
  const { data, error } = useQuery<NotesQuery>(GET_NOTES);
  const { data: searchData } = useContext(NotesContext);

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
    return (
      <>
        <SelectComponent />
        <DynamicNotes data={notes} />
      </>
    );
  }

  return <>{data && <DynamicNotes data={data} />}</>;
};

export default NotesPage;

export const getStaticProps: GetStaticProps = async () => {
  let data;
  try {
    data = await request<{ notes: Notes_notes[] }>(
      `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
      GET_NOTES
    );
  } catch (error) {
    return {
      props: {},
    };
  }

  return {
    props: { data },
  };
};
