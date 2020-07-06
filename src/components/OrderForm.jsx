import React, { useState } from 'react';
import {
  Box, Form, CheckBoxGroup, Button, TextInput,
} from 'grommet';
import axios from 'axios';
import API_URL from '../utils/apiconn';

const OrderForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [services, setServices] = useState([]);
  const [jobDate, setjobDate] = useState('1/1/1922');

  const options = [
    'Drone Pictures',
    'Listing Video',
    'Photography',
    'Twilight Shoot',
    'Web Gallery',
    'Prostitution',
    'Video',
    'Virtual Tour',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobInfo = {
      firstName,
      lastName,
      email,
      dateCreated: new Date(),
      jobDate,
      services,
    };
    const response = axios.post(API_URL, jobInfo).then((data) => console.log(data));
  };

  return (
    <Box
      width="medium"
      margin="auto"
    >
      <Form onSubmit={(e) => handleSubmit(e)}>
        <TextInput
          placeholder="First Name"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextInput
          margin="small"
          placeholder="Last Name"
          value={lastName}
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextInput
          margin="small"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <CheckBoxGroup
          margin="small"
          options={options}
          onChange={(e) => setServices(e.value)}
        />
        <Button
          type="submit"
          label="Submit"
          alignSelf="center"
        />
      </Form>
    </Box>
  );
};

export default OrderForm;
