/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { HashLink as LinkHash } from 'react-router-hash-link';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Hero = () => {
  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box>
          <Typography
            variant="h2"
            component="h1"
            color="textPrimary"
            sx={{
              fontWeight: 700,
            }}
          >
            BrickMMO
          </Typography>
          <Typography
            variant="h4"
            coponent="h2"
            color="primary"
            sx={{
              fontWeight: 600,
            }}
          >
            A Smart City Education Platform.
          </Typography>

          <Link
            to={{
              pathname: '/',
              hash: '#rules',
              state: { fromDashboard: true },
            }}
          />

          <Typography
            variant="h6"
            component="p"
            color="textSecondary"
            sx={{ fontWeight: 400 }}
          >
            Built with only using LEGO® bricks.
          </Typography>

          <Typography
            component="p"
            variant="caption"
            color="textSecondary"
            sx={{ fontWeight: 400 }}
          >
            View the{' '}
            <Link variant="inherit" component={LinkHash} to="/#rules">
              {' '}
              Rules of BrickMMO and Exceptions
            </Link>
            .
          </Typography>

          <Box display="flex" flexWrap="wrap" alignItems="center" marginTop={2}>
            {/*
            <Box marginRight={2}>
              <Button
                component={LinkRouter}
                to="https://docs.brickmmo.com"
                color="secondary"
                variant="contained"
                size="large"
              >
                {' '}
                Documentation
              </Button>
            </Box>
            */}
            <Box>
              <Button
                component={LinkRouter}
                to="/get-started"
                variant="outlined"
                color="secondary"
                size="large"
              >
                Get Started
              </Button>
            </Box>
          </Box>
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
            src="/images/hero/planet.png"
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
