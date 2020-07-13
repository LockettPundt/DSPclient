import React from 'react';
import { Box, Text, Image, Button } from 'grommet';
import Logo from '../assets/DSPLogo.png'


const Main = () => {

  return (
    <Box
      responsive
      width="medium"
      height="100vh"
      margin={{
        horizontal: "auto",
      }}
      justify="evenly"
    >
      <Box>
        <Image
          src={Logo}
          fill
        />
      </Box>
      <Box
        direction="row"
        justify="evenly"
      >
        <Button
          type="button"
          primary
          label="New Order"
          href="./createorder"
        />
        <Button
          label="Update order"
          href="./"
        />
      </Box>
    </Box>
  )
};


export default Main;