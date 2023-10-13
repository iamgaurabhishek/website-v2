/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import RadioIcon from '@mui/icons-material/Radio';
import PaletteIcon from '@mui/icons-material/Palette';
import PlaceIcon from '@mui/icons-material/Place';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import RouteIcon from '@mui/icons-material/Route';
import TerminalIcon from '@mui/icons-material/Terminal';
import CableIcon from '@mui/icons-material/Cable';
import ChargingStationIcon from '@mui/icons-material/ChargingStation';
import TelegramIcon from '@mui/icons-material/Telegram';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const List = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
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
          What is a system?
        </Box>
        <Box align="center">
          <Box marginBottom={4} maxWidth={800}>
            <Typography
              component={'p'}
              color={'textSecondary'}
              align={'center'}
              marginBottom={2}
            >
              A system could be anything from a redeveloped version of
              Twitter/X, to an API that enforces the LEGO® colour palette, to a
              physical control panel built with LEGO® bricks.
            </Typography>
            <Typography
              variant={'h6'}
              component={'p'}
              color={'textSecondary'}
              align={'center'}
            >
              Systems that have been completed, or are currently in development:
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Grid container spacing={4}>
          {[
            {
              title: 'GPS',
              subtitle:
                'A working GPS system using LEGO® bricks and a Pixy2 camera sensor.',
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
            {
              title: 'Colours',
              subtitle:
                'A small API to assist other systems in complying with the LEGO® colour palette.',
              link: {
                text: 'Colours Details',
                url: '/system-colours',
              },
              icon: <PaletteIcon />,
            },
            {
              title: 'Pixelatte',
              subtitle: 'An image to LEGO® brick conversion tool.',
              link: {
                text: 'GPS Details',
                url: '/system-gps',
              },
              icon: <ViewModuleIcon />,
            },
            {
              title: 'Places',
              subtitle:
                'A searchable directory of locations in a BrickMMO city.',
              link: {
                text: 'Places Details',
                url: '/system-places',
              },
              icon: <PlaceIcon />,
            },
            {
              title: 'Streetview',
              subtitle:
                'A navigation tool allowing visitors to virtually navigate a BrickMMO city.',
              link: {
                text: 'Streetview Details',
                url: '/system-streetview',
              },
              icon: <RouteIcon />,
            },
            {
              title: 'CLI',
              subtitle:
                'A Command Line Interface (CLI) tool to manage a BrickMMO city from a terminal.',
              link: {
                text: 'CLI Details',
                url: '/system-cli',
              },
              icon: <TerminalIcon />,
            },
            {
              title: 'Custom Cables',
              subtitle:
                'Creating custom MINDSTORMS® cables using standard RJ12 connectors and 6P6C cables.',
              link: {
                text: 'GPS Details',
                url: '/system-gps',
              },
              icon: <CableIcon />,
            },
            {
              title: 'Inductive Charging',
              subtitle:
                'Inductive charging adaptors compatible with LEGO® SPIKE™ and MINDSTORMS® hubs.',
              link: {
                text: 'GPS Details',
                url: '/system-gps',
              },
              icon: <ChargingStationIcon />,
            },
            {
              title: 'Bricker',
              subtitle:
                'A Twitter/X like social media website for BrickMMO robots.',
              link: {
                text: 'GPS Details',
                url: '/system-gps',
              },
              icon: <ChatBubbleIcon />,
            },
            {
              title: 'Branding',
              subtitle: 'Assets and guidelines for the BrickMMO brand.',
              link: {
                text: 'GPS Details',
                url: '/system-gps',
              },
              icon: <TelegramIcon />,
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
                  <Link marginTop={1} component={LinkRouter} to={item.link.url}>
                    {item.link.text}
                  </Link>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
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
              href={'/contact'}
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
              href={'/contact'}
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

export default List;
