import "./App.css";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
//
// COMPONENT IMPORTS BELOW
//
import Home from "./pages/Home";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import Thanks from "./pages/Thanks";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink has access to them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <>
          <Header />
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/shop" element={< Shop / >} />
            <Route  path="/login" element={ < Login / >} />
            <Route  path="/signup" element={ < Signup / >} />
            <Route  path="/about" element={ <About / > } />
            <Route  path="/checkout" element={ < Checkout / > } />
            <Route  path="/contact" element ={ <Contact / > } />
            <Route  path="/thanks" element={ <Thanks / > } />
            </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
