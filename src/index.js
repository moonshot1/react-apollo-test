import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

import './index.css';
import { QueryAPI } from './App7';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://mpjk0plp9.lp.gql.zone/graphql' }),
  cache: new InMemoryCache()
});

const AppWithProvider = () => (
  <ApolloProvider client={client}>
    <QueryAPI episode="EMPIRE" />
  </ApolloProvider>
);

ReactDOM.render(<AppWithProvider />, document.getElementById('root'));
