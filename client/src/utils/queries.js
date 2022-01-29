import { gql } from "@apollo/client";

// gQL Queries expose specific data to front end through react hooks
export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
export const QUERY_PACKAGES = gql`
query QUERY_PACKAGES  {
    packages {
      name
      description
      perks {
        name
        description
      }
      image
      price
    }
  }
`;
