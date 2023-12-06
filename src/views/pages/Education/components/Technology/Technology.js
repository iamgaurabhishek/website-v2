import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import SectionFlag from 'common/SectionFlag';
import SectionTitle from 'common/SectionTitle';
import SectionSubTitle from 'common/SectionSubTitle';

const Technology = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <SectionFlag>Students</SectionFlag>
      <SectionTitle>70% of Code was Written by Students</SectionTitle>
      <SectionSubTitle>
        Providing students with experience in many popular programming
        languages, frameworks, and libraries.
      </SectionSubTitle>

      <Grid container spacing={2}>
        <Grid
          item
          container
          justifyContent="center"
          xs={12}
          md={6}
          width="100%"
        >
          <Box height="100%" width="100%" maxWidth={600}>
            <img src="images/screens.png" width="100%" alt="" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container alignItems="center">
          <Box marginBottom={2}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              BrickMMO has 50+ systems
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              From documentation, to small online tools, admin control panels,
              APIs, CLIs, and this website.
            </Typography>
            <Typography color="text.secondary" marginBottom={2}>
              Systems use a variety of different technologies ensuring students
              can contribute from day one, despite their previous coding
              experience.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={LinkRouter}
              to="/systems"
              size="large"
              fullWidth={isMd ? false : true}
            >
              View Systems
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Technology;
