/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Grommet } from 'grommet';
import OrderForm from './components/OrderForm';
import CompletedOrder from './components/CompletedOrder';
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Grommet>
          <Route exact path="/" component={OrderForm} />
          <Route exact path="/order/:id?" component={CompletedOrder} />
      </Grommet>
    </Router>
  );
}

export default App;
