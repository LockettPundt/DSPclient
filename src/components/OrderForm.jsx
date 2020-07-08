import React, { useState } from 'react';
import {
  Box, Form, CheckBoxGroup, Button, TextInput, CheckBox, Calendar, Text, Anchor, Select
} from 'grommet';
import axios from 'axios';
import API_URL from '../utils/apiconn';
import TermsModal from './TermsModal';

const OrderForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [services, setServices] = useState([]);
  const [jobDate, setjobDate] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [time, setTime] = useState('');

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
  const selectOptions = [
    "9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00"
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobInfo = {
      firstName,
      lastName,
      email,
      dateCreated: new Date(),
      jobDate,
      time,
      acceptTerms,
      services
    }
    const response = axios.post(API_URL, jobInfo).then((data) => console.log(data));
  };

  return (
    <Box
      responsive
      width="medium"
      margin={{
        horizontal: "auto",
        top: "20px",
        bottom: "20px"
      }}
      elevation="small"
      pad="small"
    >
      {modalStatus
        ? <TermsModal setModalStatus={setModalStatus} />
        : null
      }
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Box
          height="small"
          justify="evenly"
        >
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
        </Box>
        <CheckBoxGroup
          margin="small"
          options={options}
          onChange={(e) => setServices(e.value)}
        />
        <Calendar
          margin="small"
          size="small"
          animate
          required
          onSelect={(e) => setjobDate(e)}
        />
        <Select
          required
          margin="small"
          options={selectOptions}
          value={time}
          onChange={({ option }) => setTime(option)}
        />
        <Box
          margin="small"
        >
          <Text>
            <Anchor
              label="Click "
              onClick={() => setModalStatus(true)}
            />
         to view terms.
        </Text>
          <CheckBox
            margin="small"
            required
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            label="Agree to Terms"
          />
        </Box>
        <Box>
          <Button
            primary
            margin="auto"
            type="submit"
            label="Submit"
          />
        </Box>
      </Form>
    </Box>
  );
};

export default OrderForm;
