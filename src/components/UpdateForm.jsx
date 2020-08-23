import React, { useState, useEffect } from 'react';
import { Box, TextInput, Form, CheckBoxGroup, Button, Text } from 'grommet';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ORDER } from '../queries/queries';
import { UPDATE_ORDER } from '../queries/mutations';
import { useHistory } from 'react-router-dom';


const UpdateForm = () => {
  const { confirmationNum } = useParams()
  const { loading, error, data } = useQuery(GET_ORDER, {
    variables: { id: confirmationNum },
  });

  const [updateFirstName, setUpdateFirstName] = useState('');
  const [updateLastName, setUpdateLastName] = useState('');
  const [updateEmail, setUpdateEmail] = useState('');
  const [updateServices, setUpdateServices] = useState([]);
  const [updateJobDate, setUpdateJobDate] = useState('');
  const [updateTime, setUpdateTime] = useState('');
  const [updatePhone, setUpdatePhone] = useState('');
  const history = useHistory();
  const [updateOrder] = useMutation(UPDATE_ORDER);

  useEffect(() => {
    if (!loading && data) {
      const {
        email, firstName, lastName, id, services, jobDate, time, phone
      } = data.singleOrder;
      setUpdateEmail(email);
      setUpdateFirstName(firstName);
      setUpdateLastName(lastName);
      setUpdateTime(time);
      setUpdateJobDate(jobDate);
      setUpdateServices(services);
      setUpdatePhone(phone);
    }
  }, [loading, data])

  const options = [
    'Drone Pictures',
    'Listing Video',
    'Photography',
    'Twilight Shoot',
    'Web Gallery',
    'Video',
    'Virtual Tour',
  ];


  if (loading) {
    return (
      <Text
        width="medium"
        size="large"
        alignSelf="center"
        margin="auto"
      >
        FETCHING ORDER....
      </Text>
    )
  }

  if (error) {
    return (
      <Text>
        Sorry. There was an error processing your request.
        {error.message}
      </Text>
    )
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobInfo = {
      firstName: updateFirstName,
      lastName: updateLastName,
      email: updateEmail,
      dateCreated: new Date(),
      jobDate: updateJobDate,
      time: updateTime,
      acceptTerms: true,
      services: updateServices,
      phone: updatePhone,
    };
    try {
      console.log('here is the updated info: ', jobInfo);
      const response = await updateOrder({
        variables: {
          id: confirmationNum,
          order: jobInfo,
        },
      });
      console.log(response.data);
      history.push(history.push(`/order/${response.data.updateOrder.id}`))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box
      width="medium"
      margin={{
        horizontal: 'auto',
        top: '20px',
        bottom: '20px',
      }}
      elevation="small"
      pad="small"

    >
      <Text>
        Confirmation Number {confirmationNum}
      </Text>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Box
          height="small"
          justify="evenly"
        >
          <TextInput
            placeholder="First Name"
            required
            value={updateFirstName}
            onChange={(e) => setUpdateFirstName(e.target.value)}
          />
          <TextInput
            margin="small"
            placeholder="Last Name"
            value={updateLastName}
            required
            onChange={(e) => setUpdateLastName(e.target.value)}
          />
          <TextInput
            margin="small"
            placeholder="Email"
            value={updateEmail}
            required
            onChange={(e) => setUpdateEmail(e.target.value)}
          />
          <TextInput
            margin="small"
            type="tel"
            placeholder="Phone Number"
            value={updatePhone}
            required
            pattern="[0-9]{10}"
            onChange={(e) => setUpdatePhone(e.target.value)}
          />
        </Box>
        <CheckBoxGroup
          margin="small"
          options={options}
          value={updateServices}
          onChange={(e) => setUpdateServices(e.value)}
        />
        <Box
          height="small"
          justify="evenly"
        >
          < TextInput
            type="date"
            animate
            value={updateJobDate}
            required
            onChange={(e) => setUpdateJobDate(e.target.value)}
          />
          < TextInput
            type="time"
            required
            value={updateTime}
            margin="small"
            onChange={(e) => setUpdateTime(e.target.value)}
          />
        </Box>
        <Box
          margin={{
            vertical: 'large',
          }}
        >
          <Button
            primary
            margin="auto"
            type="submit"
            label="Update"
          />
        </Box>
      </Form>
    </Box>
  );
};

export default UpdateForm;
