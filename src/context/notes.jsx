import { useMutation, useQuery } from "@apollo/client";
import { createContext, useState } from "react";
import { useCookies } from "react-cookie";
import { authClient } from "../apollo";
import { ADD_NOTE, DELETE_NOTE, GET_USER_NOTE } from "../queries/notes";

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
  const userId = cookies.id;
  const { data: userNotes, error: userNotesError, loading: userNotesLoading } = useQuery(GET_USER_NOTE, {
    client: authClient,
    variables: { id: userId },
  });
  const [deleteNote] = useMutation(DELETE_NOTE, {
    client: authClient,
    update(cache, { data }) {
      const { notes } = cache.readQuery({ query: GET_USER_NOTE, variables: { id: userId } });
      const newNotes = {
        notes: notes.filter((n) => n.id !== data.deleteNote.note.id),
      };
      cache.writeQuery({
        query: GET_USER_NOTE,
        variables: { id: userId },
        data: newNotes,
      });
    },
  });

  function handleSubmit(event) {
    event.preventDefault();
    addNote({
      variables: {
        title: addNoteForm.title,
        message: addNoteForm.message,
        username: cookies.id,
      },
    });
    setNoteForm({
      title: "",
      message: "",
    });
  }

  function handleDeleteNote(id) {
    deleteNote({
      variables: { ID: id },
    });
  }

  return (
    <NotesContext.Provider
      value={{
        userNotes,
        userNotesError,
        userNotesLoading,
        setNoteForm,
        addNoteForm,
        handleSubmit,
        handleDeleteNote,
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
