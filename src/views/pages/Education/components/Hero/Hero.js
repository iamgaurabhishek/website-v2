import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Hero = () => {
  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box>
          <Box marginBottom={1}>
            <Typography
              variant="h2"
              component="h1"
              color="textPrimary"
              sx={{
                fontWeight: 700,
              }}
            >
              Education
            </Typography>
            <Typography
              variant="h4"
              coponent="h2"
              color="textPrimary"
              sx={{
                fontWeight: 600,
              }}
            >
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
              >
                BrickMMO is designed for education.
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={2}>
            <Typography
              component="p"
              color="textSecondary"
              sx={{ fontWeight: 400 }}
            >
              View the{' '}
              <Link
                component="a"
                href="https://wic.brickmmo.com"
                underline="none"
              >
                Workplace Integrated Classroom (WIC)
              </Link>{' '}
              learning framework.
            </Typography>
          </Box>
          <Box marginBottom={2}>
            <Button
              color={'primary'}
              variant={'contained'}
              size={'large'}
              href="https://wic.brickmmo.com"
            >
              Read the White Paper
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={'100%'}
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          maxHeight={600}
        >
          <img src="/images/education.png" width={'100%'} height={'100%'} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
