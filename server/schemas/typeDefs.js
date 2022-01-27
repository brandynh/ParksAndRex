const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Perk {
  _id: ID
  name: String
  description: String
  quantity: Int
  }

  type Package {
  _id: ID
  name: String
  description: String
  perks: [Perk]
  image: String
  price: Float
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    packages: [Package]
    user: User
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
