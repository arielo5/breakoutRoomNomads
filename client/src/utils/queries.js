import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user {
    user {
      _id
      firstName
      lastName
      email
      
    }
  }

  ` 
  
export const QUERY_POLL = gql`

query polls {
    polls {
      _id
      pollName
      pollOp
      
    }
  }
`;
