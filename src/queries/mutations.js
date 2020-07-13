import gql from 'graphql-tag';


export const ADD_ORDER = gql`
  
  mutation addOrder(
      $order: OrderInput!
  ) {
    addOrder(
      order: $order,
    ) {
      id
      firstName
      lastName
      email
      jobDate
      time
      services
    }
  }

`;