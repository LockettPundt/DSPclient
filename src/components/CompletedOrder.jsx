import React, { useEffect, useState } from 'react';
import { Box } from 'grommet';
import axios from 'axios';
import API_URL from '../utils/apiconn';


const CompletedOrder = () => {
  const [confirmationNum, setConfirmationNum] = useState(window.location.href.split('/').pop())
  console.log(confirmationNum);
  useEffect(() => {
    const getOrder = async () => {
      const order = await axios.get(`${API_URL}${confirmationNum}`);
      console.log("here is the completed order: ", order);
    }
    getOrder();
  }, [confirmationNum])
  return (
    <Box>
      here is your order......{confirmationNum}
    </Box>
  )
}

export default CompletedOrder;