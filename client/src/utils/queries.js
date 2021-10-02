import { gql } from "graphql-tag";

export const QUERY_USER = gql`
  query user {
    user {
      _id
      firstName
      lastName
      email
      
    }
  }
`;

export const QUERY_POLL = gql`
  query poll {
    poll {
      _id
      pollName
      pollOp
      
    }
  }
`;
