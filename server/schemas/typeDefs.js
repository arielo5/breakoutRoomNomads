const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String 
  }

  type Poll {
    _id: ID
    pollName: String
    pollOp: [String]
  }

  input PollInput {
    pollId: String
    pollName: String
    pollOp: [String]
  }
 
  input Vote {
    voteId: ID
    user_id: String
    pollName: String
    voteArray: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user: User
    polls: [Poll]
  }

  type NewPoll {
    token: String
    poll: Poll
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    savePoll(pollName: String!, pollOp: [String!]): NewPoll
    removePoll(pollId: ID!): User
  }
`;

module.exports = typeDefs;
