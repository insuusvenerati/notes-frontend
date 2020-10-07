/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Notes
// ====================================================

export interface Notes_notes_user {
  __typename: "UsersPermissionsUser";
  username: string;
}

export interface Notes_notes {
  __typename: "Notes";
  id: string;
  title: string;
  message: string;
  user: Notes_notes_user | null;
}

export interface Notes {
  notes: (Notes_notes | null)[] | null;
}
