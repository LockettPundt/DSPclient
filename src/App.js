/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Grommet } from 'grommet';
import OrderForm from './components/OrderForm';
import CompletedOrder from './components/CompletedOrder';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import API_URL from './utils/apiconn';

const client = new ApolloClient({
  uri: API_URL,
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Grommet>
            <Route exact path="/" component={OrderForm} />
            <Route exact path="/order/:id?" component={CompletedOrder} />
        </Grommet>
      </Router>
    </ApolloProvider>
  );
}

export default App;
