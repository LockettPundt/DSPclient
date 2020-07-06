/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Grommet, Box } from 'grommet';
import OrderForm from './components/OrderForm';

function App() {
  return (
    <Grommet>
      <Box>
        <OrderForm />
      </Box>
    </Grommet>
  );
}

export default App;
