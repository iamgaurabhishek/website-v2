/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// import SystemImage from '../../../../../images/systems.png';

import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import RadioIcon from '@mui/icons-material/Radio';

const Systems = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={0}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        >
          Systems
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
          Redeveloping real world
          <br />
          systems into BrickMMO
        </Box>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        marginBottom={0}
      >
        <Box height={'100%'} width={'100%'} maxWidth={500}>
          <img src="/images/systems.png" height={'100%'} width={'100%'} />
        </Box>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Integrate any of these systems into your BrickMMO smart city:
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={4}>
          {[
            {
              title: 'GPS',
              subtitle:
                'A working GPS systems using LEGO® bricks and a Pixy2 camera sensor.',
              link: {
                text: 'GPS Details',
                url: '/system-gps',
              },
              icon: <SatelliteAltIcon />,
            },
            {
              title: 'Panel',
              subtitle:
                'A physical control panel to interact with other systems.',
              link: {
                text: 'Panel Details',
                url: '/system-panel',
              },
              icon: <ToggleOnIcon />,
            },
            {
              title: 'Radio',
              subtitle:
                'AI generated radio station using OpenAI and Google Text-To-Speech.',
              link: {
                text: 'Radio Details',
                url: '/system-radio',
              },
              icon: <RadioIcon />,
            },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                component={Card}
                padding={4}
                borderRadius={4}
                width={'100%'}
                height={'100%'}
              >
                <Box display={'flex'} flexDirection={'column'}>
                  <Box
                    component={Avatar}
                    width={50}
                    height={50}
                    marginBottom={2}
                    bgcolor={theme.palette.primary.main}
                    color={theme.palette.background.paper}
                  >
                    {item.icon}
                  </Box>
                  <Box
                    component={Typography}
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {item.title}
                  </Box>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                  <Link marginTop={1}>{item.link.text}</Link>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box marginTop={3} display={'flex'} justifyContent={'center'}>
        <Link
          component={'a'}
          href={'/systems'}
          color="primary"
          size="large"
          margin
        >
          View all Systems
        </Link>
      </Box>
      <Box marginTop={3}>
        <Typography
          variant={'h5'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Have an idea for a system?
        </Typography>
        <Box marginTop={2} display={'flex'} justifyContent={'center'}>
          <Box marginRight={2}>
            <Button
              component={'a'}
              href={'/systems-suggest'}
              variant="contained"
              color="secondary"
              size="large"
              margin
            >
              Suggest a System
            </Button>
          </Box>
          <Box>
            <Button
              component={'a'}
              href={'/systems-build'}
              variant="outlined"
              color="secondary"
              size="large"
            >
              Build a System
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Systems;
