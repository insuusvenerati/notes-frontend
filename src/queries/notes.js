import { gql } from "@apollo/client";

/*
 * Add Note
 */

export const ADD_NOTE = gql`
  mutation AddNote($title: String!, $message: String!, $username: ID) {
    createNote(
      input: { data: { title: $title, message: $message, user: $username } }
    ) {
      note {
        message
        title
      }
    }
  }
`;

/*
 * Find all
 */
export const GET_NOTES = gql`
  query Notes {
    notes(sort: "created_at:desc") {
      created_at
      id
      title
      message
      user {
        username
        id
      }
    }
  }
`;

/*
 * Find by text in message
 */
export const GET_NOTE = gql`
  query Note($message: String) {
    notes(where: { message_contains: $message }, sort: "createdAt:desc") {
      created_at
      id
      message
      title
      user {
        username
      }
    }
  }
`;

// Get all notes from User

export const GET_USER_NOTE = gql`
  query UserNote($id: ID!) {
    notes(where: { user: $id }) {
      title
      message
      created_at
      id
      user {
        username
      }
    }
  }
`;

// Get all users

export const GET_USERS = gql`
  query Users {
    users {
      email
      id
      blocked
      confirmed
      created_at
      provider
      updated_at
      username
    }
  }
`;

// Login

export const LOGIN = gql`
  mutation Login($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        email
        username
        id
      }
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation DeleteNote($ID: ID!) {
    deleteNote(input: { where: { id: $ID } }) {
      note {
        id
        message
        title
      }
    }
  }
`;
