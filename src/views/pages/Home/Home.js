import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import { Rules, Features, Partnership, Hero, Highlights } from './components';

const Home = () => {
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
          <Highlights />
        </Container>
      </Box>
      <Box>
        <Container>
          <Features />
        </Container>
      </Box>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container maxWidth={800}>
          <Rules />
        </Container>
      </Box>
      <Box>
        <Container>
          <Partnership />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
