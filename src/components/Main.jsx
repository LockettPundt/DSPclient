import React from 'react';
import {
  Box, Image, Button,
} from 'grommet';
import Logo from '../assets/DSPLogo.png';

const Main = () => (
  <Box
    responsive
    width="medium"
    height="500px"
    margin={{
      horizontal: 'auto',
      // vertical: "auto"
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
        href="./updateorder"
      />
    </Box>
  </Box>
);

export default Main;
