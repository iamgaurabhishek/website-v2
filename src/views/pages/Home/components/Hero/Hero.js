/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
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
            A Smart City Development Platform.
          </Typography>

          <Typography
            variant="h6"
            component="p"
            color="textSecondary"
            sx={{ fontWeight: 400 }}
          >
            Built with only using LEGO<sup>&reg;</sup> bricks.
          </Typography>

          <Typography
            component="p"
            variant="caption"
            color="textSecondary"
            sx={{ fontWeight: 400 }}
          >
            View the{' '}
            <Link component="a" href="#rules" underline="none">
              Rules of BrickMMO and Exceptions
            </Link>
            .
          </Typography>

          <Box display="flex" flexWrap="wrap" alignItems="center" marginTop={2}>
            <Box marginRight={2}>
              <Link to="https://docs.brickmmo.com">
                <Button
                  color="secondary"
                  variant="contained"
                  size="large"
                  component="span"
                >
                  Documentation
                </Button>
              </Link>
            </Box>
            <Box>
              <Link to="/get-started">
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  component="span"
                >
                  Get Started
                </Button>
              </Link>
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
          <img src="/images/planet.png" width="100%" height="100%" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
