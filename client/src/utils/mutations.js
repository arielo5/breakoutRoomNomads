import { gql } from "graphql-tag";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
        pollCount
        savedPolls {
          pollId
          pollName
          pollOp
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        firstName
        lastName
        email
        pollCount
        savedPolls {
          pollId
          pollName
          pollOp
        }
      }
    }
  }
`;

export const SAVE_POLL = gql`
  mutation savePoll($input: PollInput) {
    savePoll(input: $input) {
      _id
      firstName
      lastName
      email
      pollCount
      savedPolls {
        pollId
        pollName
        pollOp
      }
    }
  }
`;

export const REMOVE_POLL = gql`
  mutation removePoll($pollId: ID!) {
    removePoll(pollId: $pollId) {
      _id
      firstName
      lastName
      email
      pollCount
      savedPolls {
        pollId
        pollName
        pollOp
      }
    }
  }
`;
