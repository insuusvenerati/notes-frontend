import { useMutation } from "@apollo/client";
import { createContext, useState } from "react";
import { useCookies } from "react-cookie";
import { authClient } from "../apollo";
import { ADD_NOTE } from "../queries/notes";

export const NotesContext = createContext({});

export const NotesContextProvider = ({ children }) => {
  const [cookies] = useCookies(["id"]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [addNoteForm, setNoteForm] = useState({
    title: "",
    message: "",
  });
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
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
