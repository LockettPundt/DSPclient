import React, { useState } from 'react';
import { Box, TextInput, Form, CheckBoxGroup, Button, Text } from 'grommet';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_ORDER } from '../queries/queries';
//import { ADD_ORDER } from '../queries/mutations';
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
  // const [addOrder] = useMutation(ADD_ORDER);

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
      <h3>
        FETCHING ORDER....
      </h3>
    )
  }

  if (error) {
    return (
      <h3>
        Sorry. There was an error processing your request.
        {error.message}
      </h3>
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
    console.log(jobInfo);
  }

  const { email, firstName, lastName, id, services, jobDate, time, phone } = data.singleOrder;

  return (
    <Box>
      <Text>
        Confirmation Number {id}
      </Text>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Box
          height="small"
          justify="evenly"
        >
          <TextInput
            placeholder="First Name"
            required
            value={updateFirstName ? updateFirstName : firstName}
            onChange={(e) => setUpdateFirstName(e.target.value)}
          />
          <TextInput
            margin="small"
            placeholder="Last Name"
            value={updateLastName ? updateLastName : lastName}
            required
            onChange={(e) => setUpdateLastName(e.target.value)}
          />
          <TextInput
            margin="small"
            placeholder="Email"
            value={updateEmail ? updateEmail : email}
            required
            onChange={(e) => setUpdateEmail(e.target.value)}
          />
          <TextInput
            margin="small"
            type="tel"
            placeholder="Phone Number"
            value={updatePhone ? updatePhone : phone}
            required
            pattern="[0-9]{10}"
            onChange={(e) => setUpdatePhone(e.target.value)}
          />
        </Box>
        <CheckBoxGroup
          margin="small"
          options={options}
          value={services}
          onChange={(e) => setUpdateServices(e.value)}
        />
        <Box
          height="small"
          justify="evenly"
        >
          < TextInput
            type="date"
            animate
            value={updateJobDate ? updateJobDate : jobDate}
            required
            onChange={(e) => setUpdateJobDate(e.target.value)}
          />
          < TextInput
            type="time"
            required
            value={updateTime ? updateTime : time}
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
