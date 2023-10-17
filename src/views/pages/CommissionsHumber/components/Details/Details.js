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
          <Typography>Humber College Logo</Typography>
        </Breadcrumbs>

        <SectionFlag></SectionFlag>
        <SectionTitle>Humber College Logo</SectionTitle>
        <Typography
          component="p"
          variant={'h6'}
          fontWeight={400}
          marginBottom={2}
        >
          A greebled version of the Humber College logo measuring approximately
          75cm x 75cm. This logo is hanging in the BrickMMO project room at
          Humber College.
        </Typography>
        <Typography
          component="p"
          variant={'h6'}
          fontWeight={400}
          marginBottom={2}
        >
          Greeble is defined as "small pieces of detailing added to break up the
          surface of an object and add visual interest" ~ Wikipedia. LEGO®
          greebling is a common building technique used in the LEGO® community.
          To keep our greebling consistant we have some rules in a{' '}
          <Link
            component={LinkRouter}
            to="https://github.com/BrickMMO/logo-greeble"
          >
            logo-greeble
          </Link>{' '}
          GitHub repo.
        </Typography>
        <Typography
          component="p"
          variant={'h6'}
          fontWeight={400}
          marginBottom={2}
        >
          This is the first of four logos being converted to LEGO® bricks and
          greeble.
        </Typography>
      </Container>
    </Box>
  );
};

export default Details;
