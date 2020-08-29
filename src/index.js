import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {TextsProvider} from "./contexts/textsContext"
import * as moment from "moment"
import 'moment/locale/fr'  // without this line it didn't work

moment.locale('fr')

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_API_HOST}/graphql`,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <TextsProvider>
      <App />
    </TextsProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
