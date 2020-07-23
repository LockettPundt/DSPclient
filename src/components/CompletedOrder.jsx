import React from 'react';
import { Box, Text, Anchor } from 'grommet';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_ORDER } from '../queries/queries';

const CompletedOrder = () => {
  const { confirmationNum } = useParams()
  const { loading, error, data } = useQuery(GET_ORDER, {
    variables: { id: confirmationNum },
  });

  if (loading) return 'Preparing your order...';
  if (error) return `ERROR! ${error.message}`;

  const {
    email, firstName, lastName, jobDate, services, time, id,
  } = data.singleOrder
      ? data.singleOrder
      : data.updateOrder;
  return (
    <Box
      direction="column"
      align="center"
    >
      <Box
        width="medium"
        margin={{
          horizontal: "small",
          vertical: "large",
        }}
        elevation="small"
        round="small"
      >
        <Box
          background={{
            color: "rgb(235,72,79)"
          }}
          height="20px"
          round={{
            size: "xsmall",
            corner: "top"
          }}
        >
        </Box>
        <Box
          pad="small"
        >
          <Text
            color="gray"
          >
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
            {services.map((item) => (
              <Text key={item}>
                {item}
                {', '}
              </Text>
            ))}
          </Text>
        </Box>
        <Box
          background={{
            color: "rgb(235,72,79)"
          }}
          height="20px"
          round={{
            size: "xsmall",
            corner: "bottom"
          }}
        ></Box>

      </Box>
      <Box
        align="center"
      >
        <Anchor
          href="/"
        >
          Home
        </Anchor>
        <Anchor
          href="https://www.danielstabler.com"
        >
          Danielstabler.com
        </Anchor>
      </Box>
    </Box>
  );
};

export default CompletedOrder;
