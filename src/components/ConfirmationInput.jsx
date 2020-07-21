import React, { useState } from 'react';
import { TextInput, Button, Form, Box, Text, Anchor } from 'grommet';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_ORDER } from '../queries/queries';
import { useHistory } from 'react-router-dom';


const ConfirmationInput = () => {
  const [orderNum, setOrderNum] = useState('');
  const [errorStatus, setErrorStatus] = useState(false);
  const [getOrder, { loading, data, error }] = useLazyQuery(GET_ORDER);
  const history = useHistory();

  // if (loading) return 'Loading'
  if (data) history.push(`/update/${data.singleOrder.id}`)

  const handleSubmit = (e) => {
    e.preventDefault();
    getOrder({ variables: { id: orderNum } });
  }

  return (
    <Box
      margin={{
        vertical: "large",
        horizontal: "auto",
      }}
      width="medium"
      pad="small"
      elevation="small"
    >
      {error
        ?
        <Box
          width="medium"
          pad="small"
        >
          <Text>
            There was an error processing your request.
            Please check that your confirmation number is correct.
          </Text>
          <Box
            justify="evenly"
            margin="auto"
          >
            <Button
              margin={{
                vertical: "medium"
              }}
              primary
              type="button"
              href="./updateorder"
              label="Back"
            />
          </Box>
        </Box>
        :
        <Form
          onSubmit={(e) => handleSubmit(e)}
        >
          <TextInput
            required
            value={orderNum}
            placeholder="Confirmation Number"
            onChange={(e) => setOrderNum(e.target.value)}
          />
          <Box
            justify="evenly"
            margin="large"
          >
            <Button
              primary
              type="submit"
              label="Update Order"
            />
          </Box>
        </Form>
      }
    </Box>
  )
};

export default ConfirmationInput;