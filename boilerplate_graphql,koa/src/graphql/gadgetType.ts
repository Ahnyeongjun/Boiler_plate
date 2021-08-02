import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLString },
    uid: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

export const SuccessType = new GraphQLObjectType({
  name: "createUser",
  fields: () => ({
    message: { type: GraphQLString },
  }),
});
