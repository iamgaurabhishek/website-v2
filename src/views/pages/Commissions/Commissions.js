import React from 'react';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Container from 'common/Container';

import { Hero, List } from './components';

const Commissions = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container>
          <Hero />
        </Container>
      </Box>
      <Box>
        <Container>
          <List />
        </Container>
      </Box>
    </Box>
  );
};

export default Commissions;
