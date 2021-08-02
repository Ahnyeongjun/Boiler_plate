import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  buildSchema,
  GraphQLList,
} from "graphql";
import { UserType, SuccessType } from "./gadgetType";
import { UserRepository } from "../db/repository";

const userRepository: UserRepository = new UserRepository();

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    findOneById: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return userRepository.findOneById(args.id);
      },
    },
    findAllById: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLString } },
      async resolve(parent, args) {
        console.log(await userRepository.findAllById(args.id));
        return userRepository.findAllById(args.id);
      },
    },
    createUser: {
      type: SuccessType,
      args: {
        id: { type: GraphQLString },
        password: { type: GraphQLString },
        username: { type: GraphQLString },
      },
      async resolve(parent, args) {
        console.log(
          await userRepository.createUser(args.username, args.id, args.password)
        );
        return userRepository.createUser(args.username, args.id, args.password);
      },
    },
  },
});

// const
export const schema = new GraphQLSchema({
  query: RootQuery,
});
