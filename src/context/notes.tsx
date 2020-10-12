import {
  ApolloClient,
  ApolloError,
  createHttpLink,
  InMemoryCache,
  QueryLazyOptions,
  useMutation,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";
import { AddNote } from "queries/__generated__/AddNote";
import { createContext, Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useCookies } from "react-cookie";
import { ADD_NOTE } from "../queries/notes";
import { Notes, Notes_notes } from "../queries/__generated__/Notes";

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

export type NoteFromSearch = {
  item: Notes_notes | undefined;
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
  selectedUser: string;
  setSelectedUser: Dispatch<SetStateAction<string>>;
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
  searchResults: NoteFromSearch;
  setSearchResults: Dispatch<SetStateAction<NoteFromSearch>>;
};

export const NotesContext = createContext<NotesContextType>({} as NotesContextType);

export const NotesContextProvider: React.FC = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<NoteFromSearch>([]);
  const [selectedUser, setSelectedUser] = useState("");
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
        setNoteForm,
        addNoteForm,
        handleSubmit,
        addNoteError,
        addNoteLoading,
        selectedUser,
        setSelectedUser,
        searchInput,
        setSearchInput,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
