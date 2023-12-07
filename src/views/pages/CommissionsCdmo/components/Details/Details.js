/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Link as LinkRouter } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from 'common/Container';

import SectionFlag from 'common/SectionFlag';
import SectionTitle from 'common/SectionTitle';

const Details = () => {
  const theme = useTheme();

  return (
    <Box
      borderRadius={1.5}
      sx={{
        position: 'relative',
        backgroundColor: theme.palette.alternate.main,
      }}
    >
      <Container paddingX={{ xs: 2, sm: 6, md: 12 }}>
        <Breadcrumbs style={{ display: 'flex', justifyContent: 'center' }}>
          <Link
            underline="hover"
            to="/commissions"
            component={LinkRouter}
            color="primary"
          >
            Commissions
          </Link>
          <Typography>Biologics Manufacturing</Typography>
        </Breadcrumbs>

        <SectionFlag></SectionFlag>
        <SectionTitle>Biologics Manufacturing</SectionTitle>
        <Typography
          component="p"
          variant={'h6'}
          fontWeight={400}
          marginBottom={2}
        >
          A 1:25 scale interactive biologics CDMO facility. The full facility
          measures 272 x 56 studs and 50 bricks tall (218cm x 45cm x 48cm).
        </Typography>
        <Typography
          component="p"
          variant={'h6'}
          fontWeight={400}
          marginBottom={2}
        >
          The CDMO facility will be displayed at{' '}
          <Link component={LinkRouter} to="https://www.bio.org/">
            BIO 2024
          </Link>{' '}
          (the world's largest largest biotechnology conference attracting more
          than 16,000 atendees). It will be used to engage attendees and provide
          education related to the biologics manufactureing proess.
        </Typography>
        <Typography
          component="p"
          variant={'h6'}
          fontWeight={400}
          marginBottom={2}
        ></Typography>
      </Container>
    </Box>
  );
};

export default Details;
