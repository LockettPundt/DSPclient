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
      phone
    }
  }
`;

export const UPDATE_ORDER = gql`

  mutation updateOrder(
    $id: ID!
    $order: OrderInput!
  ) {
    updateOrder(
      id: $id,
      order: $order,
    ) {
      id
      firstName
      lastName
      email
      jobDate
      time
      services
      phone
    }
  }
`;