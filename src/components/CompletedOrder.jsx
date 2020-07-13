import React, { useState } from 'react';
import { Box, Text } from 'grommet';
import { GET_ORDER } from './queries/queries';
import { useQuery } from '@apollo/react-hooks';


const CompletedOrder = () => {
  const [confirmationNum, setConfirmationNum] = useState(window.location.href.split('/').pop());
  const { loading, error, data } = useQuery(GET_ORDER, {
    variables: { id: confirmationNum },
  })

  if (loading) return 'Preparing your order...';
  if (error) return `ERROR! ${error.message}`

  const { email, firstName, lastName, jobDate, services, time, id } = data.singleOrder;
  return (
    <Box>
      <Text>
        You should receive an email shortly with your
        order information.
      </Text>
      <Text>
        Confirmation Number:
        {' '}
        {id}
      </Text>
      <Text>
        {firstName}
        {' '}
        {lastName}
      </Text>
      <Text>
        {email}
      </Text>
      <Text>
        {services.map(item => (<Text key={item}>{item}{', '}</Text>))}
      </Text>
    </Box>
  )
}

export default CompletedOrder;