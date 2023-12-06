/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Hero = () => {
  return (
    <Grid container spacing={4}>
      <Grid item container alignItems="center" xs={12} md={6}>
        <Box>
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
            color="primary"
            sx={{
              fontWeight: 600,
            }}
          >
            BrickMMO is designed for education.
          </Typography>

          <Typography
            variant="caption"
            component="p"
            color="textSecondary"
            sx={{ fontWeight: 400 }}
          >
            View the{' '}
            <Link component={LinkRouter} to="https://wic.brickmmo.com">
              Workplace Integrated Classroom (WIC)
            </Link>{' '}
            learning framework.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height="100%"
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          maxHeight={600}
        >
          <img
            src="/images/hero/education.png"
            width="100%"
            height="100%"
            alt=""
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
