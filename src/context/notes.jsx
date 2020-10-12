import { ApolloClient, createHttpLink, InMemoryCache, useMutation } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";
import { createContext, useState } from "react";
import { useCookies } from "react-cookie";
import { ADD_NOTE } from "../queries/notes";

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

export const NotesContext = createContext({});

export const NotesContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [addNoteForm, setNoteForm] = useState({
    title: "",
    message: "",
  });
  const [cookies] = useCookies();
  const [addNote, { error: addNoteError, loading: addNoteLoading }] = useMutation(ADD_NOTE, {
    client: authClient,
  });

  function handleSubmit(event) {
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
