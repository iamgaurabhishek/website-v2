import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import {
  Hero,
  Counter,
  Grants,
  Cultivate,
  Greenfield,
  Priority3,
} from './components';

const Research = () => {
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
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container>
          <Grants />
        </Container>
      </Box>
      <Box>
        <Container>
          <Greenfield />
        </Container>
      </Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container>
          <Priority3 />
        </Container>
      </Box>
      <Box>
        <Container>
          <Cultivate />
        </Container>
      </Box>
    </Box>
  );
};

export default Research;
