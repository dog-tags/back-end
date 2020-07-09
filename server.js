const express = require("express");

const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const cors = require("cors");

require("dotenv").config();

const app = express();

const welcomeMessage = `
<body style="display: flex; flex-direction: column; align-items: center;">
  <h1>Server is up and running!</h1>
  <p>The GraphQL API is located at <a href="/graphql">/graphql</a></p>
</body>
`;

app.get("/", async (_, res) => {
  res.send(welcomeMessage);
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

app.use(cors());

server.applyMiddleware({
  app,
  cors: false,
});

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running on port ${port}! 🚀`));
