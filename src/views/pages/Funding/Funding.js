import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import { Hero, Counter, Grants } from './components';

const Funding = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
      <Box>
        <Container>
          <Counter />
        </Container>
      </Box>
      <Box>
        <Container>
          <Grants />
        </Container>
      </Box>
    </Box>
  );
};

export default Funding;
