import React from 'react';
import { Layer, Box, Image } from 'grommet';
import Terms from './Terms.png';

const TermsModal = ({ setModalStatus }) => {


  return (
    <Layer
      animate
      modal
      onClick={() => setModalStatus(false)}
      onKeyDown={() => setModalStatus(false)}
    >
      <Box
        width="large"
        overflow="scroll"
        margin-top="medium"
      >
        <Image
          fill
          src={Terms}
        />
      </Box>
    </Layer>
  );
};


export default TermsModal;
