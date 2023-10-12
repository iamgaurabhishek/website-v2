import React from 'react';

import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';

import Container from 'common/Container';

import { Hero, Details, Counter, Gallery } from './components';

const CommissionsHumber = () => {
  const theme = useTheme();
  return (
    <Box>
      <Hero />
      <Box>
        <Container>
          <Counter />
        </Container>
      </Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container>
          <Gallery />
        </Container>
      </Box>
      <Box>
        <Container>
          <Details />
        </Container>
      </Box>
    </Box>
  );
};

export default CommissionsHumber;
