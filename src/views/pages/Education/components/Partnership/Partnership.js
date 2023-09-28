/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import CodeAdamLogo from './images/codeadam.jpg';
import BrevisReferoLogo from './images/brevisrefero.jpg';
import HumberLogo from './images/humber.jpg';

const Partnership = () => {
  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'textSecondary'}
        align={'center'}
      >
        PARTNERSHIP
      </Typography>
      <Box
        component={Typography}
        fontWeight={700}
        variant={'h3'}
        gutterBottom
        align={'center'}
      >
        BrickMMO is a Collaborative Project
      </Box>
      <Typography
        variant={'h6'}
        component={'p'}
        color={'textSecondary'}
        align={'center'}
      >
        BrickMMO is an ongoing collaboration between{' '}
        <Link href="https://codeadam.ca" underline="none">
          CodeAdam
        </Link>
        ,{' '}
        <Link href="https://codeadam.ca" underline="none">
          Humber College
        </Link>
        , and{' '}
        <Link href="https://codeadam.ca" underline="none">
          BrevisRefero
        </Link>
        .
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
        {[
          {
            image: CodeAdamLogo,
            url: 'https://codeadam.ca',
          },
          {
            image: HumberLogo,
            url: 'https://humber.ca',
          },
          {
            image: BrevisReferoLogo,
            url: 'https://brevisrefero.com',
          },
        ].map((item, i) => (
          <Box marginTop={3} marginX={2} key={i}>
            <Box component="a" href={item.url}>
              <Box
                component="img"
                height={'50px'}
                src={item.image}
                alt="..."
                sx={
                  {
                    /*filter: 'grayscale(1)',*/
                  }
                }
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Partnership;
