import gql from 'graphql-tag';


export const GET_ORDER = gql`
  
    query gotey($id: ID!) {
      singleOrder(id: $id) {
        id
        firstName
        lastName
        services
        jobDate
        time
        email
      }
    }
    
`;