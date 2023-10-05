import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import { Hero, Counter, Wic, Reason, Technology } from './components';

const Education = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
      <Container>
        <Counter />
      </Container>
      <Container>
        <Reason />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Technology />
        </Container>
      </Box>
      <Container>
        <Wic />
      </Container>
    </Box>
  );
};

export default Education;
