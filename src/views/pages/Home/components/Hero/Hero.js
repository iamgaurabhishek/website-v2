/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// import RocketIllustration from 'svg/illustrations/Rocket';
// import HeroImage from '../../../../../images/planet.png';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box>
          <Box marginBottom={1}>
            <Typography
              variant="h2"
              color="textPrimary"
              sx={{
                fontWeight: 700,
              }}
            >
              BrickMMO
            </Typography>
            <Typography
              variant="h4"
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
                A Smart City Development Platform.
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={0}>
            <Typography
              variant="h6"
              component="p"
              color="textSecondary"
              sx={{ fontWeight: 400 }}
            >
              Built with only using LEGO<sup>&reg;</sup> bricks.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              component="p"
              variant={'caption'}
              color="textSecondary"
              sx={{ fontWeight: 400 }}
            >
              View the{' '}
              <Link component="a" href="#rules" underline="none">
                Rules of BrickMMO and Exceptions
              </Link>
              .
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Button
              component={'a'}
              variant="contained"
              color="secondary"
              size="large"
              fullWidth={isMd ? false : true}
              href={'/get-started'}
            >
              Get Started
            </Button>
            <Box
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              width={{ xs: '100%', md: 'auto' }}
            >
              <Button
                component={'a'}
                href={'/documentation'}
                variant="outlined"
                color="secondary"
                size="large"
                fullWidth={isMd ? false : true}
              >
                Documentation
              </Button>
            </Box>
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
        >
          <Box height={'100%'} width={'100%'} maxHeight={600}>
            <img src="/images/planet.png" width={'100%'} height={'100%'} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
