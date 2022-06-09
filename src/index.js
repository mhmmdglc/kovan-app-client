import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Pages from './pages';
import { ChakraProvider } from '@chakra-ui/react'


const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Pages />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>
);

