const { User, Poll } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
const { convertNodeHttpToRequest } = require("apollo-server-core");

const resolvers = {
    Query: {
      polls: async () => {
        return await Poll.find({});
      }, 
      user: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id }).select(
            "-__v -password"
          );
          return userData;
        }
        throw new AuthenticationError("Not logged in");
      },
    },
  
    Mutation: {

      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = await signToken(user);
  
        return { token, user };
      },
  
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError("Incorrect credentials");
        }
  
        const correctPass = await user.isCorrectPassword(password);
  
        if (!correctPass) {
          throw new AuthenticationError("Incorrect credentials");
        }
  
        const token = signToken(user);
        return { token, user };
      },

      // savePoll: async (parent, {input}, context) =>{
      //   if (context.user) {
      //     const updateUser = await User.findByIdAndUpdate(
      //       { _id: context.user._id },
      //       { $push: { savedPolls: input } },
      //       { new: true }
      //     );
      //     return updateUser;
      //   }
      //   throw new AuthenticationError("You need to be log in!");
      // },

      savePoll: async (parent, args) => {
        console.log("WOO Args", args);
        const poll = await Poll.create(args);
        console.log("UH", poll);
        const token = await signToken(poll);
  
        return { token, poll };
      },

      removePoll: async ( parent, args, context ) => {
        if (context.user) {
          return User.findByIdAndUpdate(
            { _id: context.user._id },
            {$pull: { savedPolls: { pollId: args.pollId }}},
            { new: true }
          );
        }
        throw new AuthenticationError("You need to be log in!");
      }
    }
  };
  
  module.exports = resolvers;
  