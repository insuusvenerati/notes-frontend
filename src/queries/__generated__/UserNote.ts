/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserNote
// ====================================================

export interface UserNote_notes_user {
  __typename: "UsersPermissionsUser";
  username: string;
}

export interface UserNote_notes {
  __typename: "Notes";
  title: string;
  message: string;
  createdAt: any;
  id: string;
  user: UserNote_notes_user | null;
}

export interface UserNote {
  notes: (UserNote_notes | null)[] | null;
}

export interface UserNoteVariables {
  id: string;
}
