import {
  ApolloClient,
  ApolloError,
  createHttpLink,
  InMemoryCache,
  QueryLazyOptions,
  useLazyQuery,
  useMutation,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createContext, Dispatch, FormEvent, SetStateAction, useState } from "react";
import { ADD_NOTE, GET_NOTE, GET_NOTES } from "../queries/notes";
import { Note } from "../queries/__generated__/Note";
import { Notes } from "../queries/__generated__/Notes";
import Cookies from "js-cookie";
import { useCookies } from "react-cookie";
import { AddNote } from "queries/__generated__/AddNote";

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const authClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

type NoteForm = {
  title: string;
  message: string;
};

type NotesContextType = {
  data: Notes | undefined;
  loading: boolean;
  error: ApolloError | undefined;
  getNote: (options?: QueryLazyOptions<Record<string, any>> | undefined) => void;
  setNoteForm: Dispatch<SetStateAction<{ title: string; message: string }>>;
  addNoteForm: NoteForm;
  handleSubmit: (event: FormEvent) => void;
  addNoteError?: ApolloError;
  addNoteLoading: boolean;
};

export const NotesContext = createContext<NotesContextType>({} as NotesContextType);

export const NotesContextProvider: React.FC = ({ children }) => {
  const [getNote, { data, loading, error }] = useLazyQuery<Note>(GET_NOTE, { client: authClient });
  const [addNoteForm, setNoteForm] = useState({
    title: "",
    message: "",
  });
  const [cookies] = useCookies();
  const [addNote, { error: addNoteError, loading: addNoteLoading }] = useMutation<AddNote>(
    ADD_NOTE,
    { client: authClient }
  );

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    addNote({
      variables: { title: addNoteForm.title, message: addNoteForm.message, username: cookies.id },
    });
    setNoteForm({
      title: "",
      message: "",
    });
  }

  return (
    <NotesContext.Provider
      value={{
        getNote,
        data,
        loading,
        error,
        setNoteForm,
        addNoteForm,
        handleSubmit,
        addNoteError,
        addNoteLoading,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
