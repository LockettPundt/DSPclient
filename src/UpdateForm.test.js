import { MockedProvider } from "@apollo/react-testing"
import { render, screen } from '@testing-library/react';
import React from 'react'
import UpdateForm from './components/UpdateForm'
import { GET_ORDER }  from './queries/queries'
import { MemoryRouter, Route } from 'react-router-dom'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import API_URL from './utils/apiconn';


const client = new ApolloClient({
  uri: API_URL,
})


const mock = [
  {
    request: {
      query: GET_ORDER,
      variables: {
        id: '5f41462a9a2d3b09f152b6dd'
      }
    },
    result: {
      data: {
        singleOrder: {
          id: '5f41462a9a2d3b09f152b6dd',
          firstName: 'Hello',
          lastName: 'World',
          services: '',
          jobDate: new Date(),
          time: '16:20',
          email: 'hello@world.com',
          phone: '12344567890',
        }
      }
    }
  }
  ]

test('it renders the form with the queried data', async () => {
  render(
      <ApolloProvider client={client}>
        <MemoryRouter initialEntries={['/update/5f41462a9a2d3b09f152b6dd']} initialIndex={0}>
          <Route path="/update/:confirmationNum?">
            <MockedProvider mocks={mock} addTypename={false}>
              <UpdateForm />
            </MockedProvider>
          </Route>
        </MemoryRouter> 
      </ApolloProvider>
  )

  expect(await screen.findByText('Confirmation Number 5f41462a9a2d3b09f152b6dd')).toBeInTheDocument()
})