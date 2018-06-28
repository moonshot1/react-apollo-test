import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

import TestRenderer from 'react-test-renderer';

import './index.css';
import App from './App1';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://mpjk0plp9.lp.gql.zone/graphql' }),
  cache: new InMemoryCache()
});


// Not predictable
it('renders without error', (done) => {
  const testR = TestRenderer.create(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
  
  console.log("Output", testR.toJSON());
  setTimeout(() => done(), 2000);
});