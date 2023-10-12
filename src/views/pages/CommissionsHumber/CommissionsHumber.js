import React from 'react';

import Box from '@mui/material/Box';

import Container from 'common/Container';

import { Hero, Partnership, Counter } from './components';

const CommissionsHumber = () => {
  return (
    <Box>
      <Box
        minHeight={{ xs: 'auto', md: 'calc(100vh - 64px)' }}
        height={'auto'}
        position={'relative'}
        sx={{
          backgroundImage: 'url("images/commissions/background-humber.jpg")',
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
            backgroundColor: '#001d43',
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
          <Counter />
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

export default CommissionsHumber;
