import Koa from "koa";
import "./config/env.ts";
import mount from "koa-mount";
import graphqlHTTP from "koa-graphql";
import { schema } from "./graphql/schema";
import { createConnection } from "typeorm";
import connectionOpts from "./db";

const app = new Koa();

createConnection(connectionOpts);

app.listen(8080);

app.on("error", () => {
  console.log("app_listen");
});

app.use(
  mount(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  )
);
