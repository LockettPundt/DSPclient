import { MockedProvider } from "@apollo/client/testing"
import { render, screen } from '@testing-library/react';
import React from 'react'
import CompletedOrder from './components/CompletedOrder'
import { GET_ORDER }  from './queries/queries'
import { MemoryRouter, Route } from 'react-router-dom'

const mock = [
  {
    request: {
      query: GET_ORDER,
      variables: {
        id: '123'
      }
    },
    result: {
      data: {
        singleOrder: {
          id: '123',
          firstName: 'Hello',
          lastName: 'World',
          services: [],
          jobDate: new Date(),
          time: '16:20',
          email: 'hello@world.com',
          phone: '12344567890',
        }
      }
    }
  }
  ]

test('Renders the component with queried data.', async () => {
  render(
    <MemoryRouter initialEntries={['/order/123']} initialIndex={0}>
      <Route path="/order/:confirmationNum?">
        <MockedProvider mocks={mock} addTypename={false}>
          <CompletedOrder />
        </MockedProvider>
      </Route>
    </MemoryRouter> 
)

expect(await screen.findByText('hello@world.com')).toBeInTheDocument()
})