/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Users
// ====================================================

export interface Users_users {
  __typename: "UsersPermissionsUser";
  email: string;
  id: string;
  blocked: boolean | null;
  confirmed: boolean | null;
  createdAt: any;
  provider: string | null;
  updatedAt: any;
  username: string;
}

export interface Users {
  users: (Users_users | null)[] | null;
}
