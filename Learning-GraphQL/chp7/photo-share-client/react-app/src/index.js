import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {ApolloProvider} from 'react-apollo';
import { InMemoryCache, HttpLink, ApolloClient, split } from 'apollo-boost';
import {persistCache} from 'apollo-cache-persist';
import {WebSocketLink} from 'apollo-link-ws';
import {getMainDefinition} from 'apollo-utilities'

const cache = new InMemoryCache();
persistCache({
  cache,
  storage: localStorage
});

if (localStorage['apollo-cache-persist']) {
  let cacheData = JSON.parse(localStorage['apollo-cache-persist']);
  cache.restore(cacheData);
}

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql',
  request: operation => {
    operation.setContext(context => ({
      headers: {
        ...context.headers, 
        authorization: localStorage.getItem('token')
      }
    }))
  }
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

/**
 * Here, we’ve created a client and then placed that client in React’s global scope with the help of a component called the ApolloProvider. 
 * Any child component wrapped by the ApolloProvider will have access to the client.
 */