/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddNote
// ====================================================

export interface AddNote_createNote_note {
  __typename: "Notes";
  message: string;
  title: string;
}

export interface AddNote_createNote {
  __typename: "createNotePayload";
  note: AddNote_createNote_note | null;
}

export interface AddNote {
  createNote: AddNote_createNote | null;
}

export interface AddNoteVariables {
  title: string;
  message: string;
  username?: string | null;
}
