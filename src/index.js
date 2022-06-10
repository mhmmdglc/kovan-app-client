import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import Pages from './pages';
import { ChakraProvider } from '@chakra-ui/react'
import { setContext } from "@apollo/client/link/context";
import { AuthProvider } from './context/authContext';
import { BrowserRouter } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: "http://localhost:4000"
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem("token") || ""
    }
  }
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ChakraProvider>
          <React.StrictMode>
            <Pages />
          </React.StrictMode>
        </ChakraProvider>
      </BrowserRouter>
    </ApolloProvider>
  </AuthProvider>

);

