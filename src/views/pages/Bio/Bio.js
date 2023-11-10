/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import { Link as LinkRouter } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import Container from 'common/Container';

import { Hero, Benefits, SignUp } from './components';

const Bio = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        minHeight={{ xs: 'auto', md: 'calc(100vh - 64px)' }}
        height={'auto'}
        position={'relative'}
        sx={{
          backgroundImage: 'url("images/hero/bio-2023.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundAttachment: 'fixed',
          '&:after': {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: '100%',
            width: '100%',
            content: '" "',
            zIndex: 1,
            backgroundColor: theme.palette.primary.dark,
            backgroundAttachment: 'fixed',
            opacity: 0.7,
          },
        }}
      >
        <Box
          position={{ xs: 'relative', md: 'absolute' }}
          top={{ xs: 0, md: '50%' }}
          width={'100%'}
          height={'auto'}
          sx={{
            transform: { md: 'translateY(-50%)' },
          }}
          zIndex={2}
        >
          <Container>
            <Hero />
          </Container>
        </Box>
      </Box>
      <Box>
        <Container>
          <Benefits />
        </Container>
      </Box>
      <Box>
        <Container>
          <SignUp />
        </Container>
      </Box>
    </Box>
  );
};

export default Bio;
