/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Note
// ====================================================

export interface Note_notes_user {
  __typename: "UsersPermissionsUser";
  username: string;
}

export interface Note_notes {
  __typename: "Notes";
  createdAt: any;
  id: string;
  message: string;
  title: string;
  user: Note_notes_user | null;
}

export interface Note {
  notes: (Note_notes | null)[] | null;
}

export interface NoteVariables {
  message?: string | null;
}
