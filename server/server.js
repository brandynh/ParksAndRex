const path = require('path');

// DataBase, Server, GQL Queries/Mutations, and Context State: Init & Configure
const db = require('./config/connection.js');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth')
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});
// All route communication transfers to and through Apollo first, at the middle of the stack
server.applyMiddleware({ app });

// Provide middleware to express server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// While in production mode, serve static files from the build root
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Wild One (better than serving nothing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// We open the database to a live express server listening at PORT
db.once('open', () => {
  app.listen(process.env.PORT || PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
