import React from 'react';
import { render } from '@testing-library/react';
import Main from './components/Main'

test('Render new order button', () => {
  const { getByText } = render(<Main />)
  const newOrderButton = getByText('New Order')
  expect(newOrderButton).toBeInTheDocument()
})

test('Render update order button', () => {
  const { getByText } = render(<Main />)
  const updateButton = getByText('Update Order')
  expect(updateButton).toBeInTheDocument()
})