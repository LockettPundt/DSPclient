import { gql } from '@apollo/client';


export const GET_ORDER = gql`
  
    query getOrder($id: ID!) {
      singleOrder(id: $id) {
        id
        firstName
        lastName
        services
        jobDate
        time
        email
        phone
      }
    }
    
`;