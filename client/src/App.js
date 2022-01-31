import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// CSS & IMGs
import { StoreProvider } from "./utils/GlobalState";

import "./App.css";
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
import Perks from "./pages/PerkInfo.js";
import Thanks from "./pages/Thanks";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Linkbar from './components/Linkbar';
import Jeff from './pages/Jeff';

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
          <StoreProvider>
            <Header/>
                 <div className="background mt-5 pt-5">
                    <main className="h-100 d-flex justify-content-center     align-items-center pt-3">
                     <Routes>
                       <Route exact path="/" element={<Home />} />
                       <Route exact path="/shop" element={<Shop />} />
                       <Route exact path="/login" element={<Login />} />
                       <Route exact path="/signup" element={<Signup />} />
                       <Route exact path="/aboutpage" element={<About />} />
                       <Route exact path="/perks" element={<Perks />} />
                       <Route exact path="/checkout" element={<Checkout />} />
                       <Route exact path="/contact" element={<Contact />} />
                       <Route exact path="/thanks" element={<Thanks />} />
                       <Route exact path="/jeff" element={<Jeff />} />
                     </Routes>
                    </main>
                 </div>
            <Footer />
            <Linkbar id="link-container"/>
            </StoreProvider>
        </>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
