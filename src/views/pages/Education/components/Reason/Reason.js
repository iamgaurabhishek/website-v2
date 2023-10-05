import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Reason = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        >
          For Education
        </Typography>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          marginBottom={2}
          marginTop={2}
        >
          <Box height={'100%'} width={'100%'} maxWidth={600}>
            <img src="/images/map.png" height={'100%'} width={'100%'} />
          </Box>
        </Box>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
        >
          BrickMMO was developed out of a
          <br />
          desire to teach code differently
        </Box>
        <Typography
          variant={'h5'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
          marginBottom={2}
        >
          Providing students with a real world sandbox to apply:
        </Typography>
        <Box>
          {[
            'Artificial Inteligence (AI)',
            'Machine Leaning (ML)',
            'Internet of Things (IOT)',
            'Application Programming Interfaces (APIs)',
            'Front-End Programming Languages',
            'Back-End Programming Languages',
          ].map((item) => (
            <Typography
              variant={'h6'}
              component={'p'}
              color={'textSecondary'}
              align={'center'}
              marginBottom={1}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Reason;
