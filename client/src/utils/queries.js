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

  query poll {
    poll {
      _id
      pollName
      pollOp
      
    }
  }
`;

// pollCount
//       savedPolls {
//         pollId
//         pollName
//         pollOp
//       }