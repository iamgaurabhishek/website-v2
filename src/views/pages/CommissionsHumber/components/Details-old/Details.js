/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import { Link as LinkRouter } from 'react-router-dom';

// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import SectionFlag from 'common/SectionFlag';
import SectionTitle from 'common/SectionTitle';
import SectionSubTitle from 'common/SectionSubTitle';

const Details = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <SectionFlag>Humber College Logo</SectionFlag>
      <SectionTitle>BrickMMO is a Collaborative Project</SectionTitle>
      <SectionSubTitle>A 75cm x 75cm greebled version of</SectionSubTitle>
    </Box>
  );
};

export default Details;
