import React from 'react';

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

export const systems = [
  {
    title: 'GPS',
    subtitle:
      'A working GPS system using LEGO® bricks and a Pixy2 camera sensor.',
    link: {
      text: 'GPS Details',
      url: '/systems-gps',
    },
    icon: <SatelliteAltIcon />,
    technology: ['python', 'nodejs'],
  },
  {
    title: 'Panel',
    subtitle: 'A physical control panel to interact with other systems.',
    link: {
      text: 'Panel Details',
      url: '/systems-panel',
    },
    icon: <ToggleOnIcon />,
    technology: ['python', 'laravel', 'php'],
  },
  {
    title: 'Radio',
    subtitle:
      'AI generated radio station using OpenAI and Google Text-To-Speech.',
    link: {
      text: 'Radio Details',
      url: '/systems-radio',
    },
    icon: <RadioIcon />,
    technology: ['nodejs', 'laravel', 'php'],
  },
  {
    title: 'Colours',
    subtitle:
      'A small API to assist other systems in complying with the LEGO® colour palette.',
    link: {
      text: 'Colours Details',
      url: '/systems-colours',
    },
    icon: <PaletteIcon />,
    technology: ['php', 'mysql'],
  },
  {
    title: 'Pixelatte',
    subtitle: 'An image to LEGO® brick conversion tool.',
    link: {
      text: 'Pixelatte Details',
      url: '/systems-pixelatte',
    },
    icon: <ViewModuleIcon />,
    technology: ['html', 'css', 'javascript'],
  },
  {
    title: 'Places',
    subtitle: 'A searchable directory of locations in a BrickMMO city.',
    link: {
      text: 'Places Details',
      url: '/systems-places',
    },
    icon: <PlaceIcon />,
    technology: ['php', 'laravel', 'mysql', 'react'],
  },
  {
    title: 'Streetview',
    subtitle:
      'A navigation tool allowing visitors to virtually navigate a BrickMMO city.',
    link: {
      text: 'Streetview Details',
      url: '/systems-streetview',
    },
    icon: <RouteIcon />,
    technology: ['php', 'laravel', 'mysql', 'react'],
  },
  {
    title: 'CLI',
    subtitle:
      'A Command Line Interface (CLI) tool to manage a BrickMMO city from a terminal.',
    link: {
      text: 'CLI Details',
      url: '/systems-cli',
    },
    icon: <TerminalIcon />,
    technology: ['python'],
  },
  {
    title: 'Custom Cables',
    subtitle:
      'Creating custom MINDSTORMS® cables using standard RJ12 connectors and 6P6C cables.',
    link: {
      text: 'Custom Cables Details',
      url: '/systems-cables',
    },
    icon: <CableIcon />,
    technology: [],
  },
  {
    title: 'Inductive Charging',
    subtitle:
      'Inductive charging adaptors compatible with LEGO® SPIKE™ and MINDSTORMS® hubs.',
    link: {
      text: 'Inductive Charging Details',
      url: '/systems-charging',
    },
    icon: <ChargingStationIcon />,
    technology: [],
  },
  {
    title: 'Bricker',
    subtitle: 'A Twitter/X like social media website for BrickMMO robots.',
    link: {
      text: 'Bricker Details',
      url: '/systems-bricker',
    },
    icon: <ChatBubbleIcon />,
    technology: ['php', 'laravel', 'mysql'],
  },
  {
    title: 'Branding',
    subtitle: 'Assets and guidelines for the BrickMMO brand.',
    link: {
      text: 'Branding Details',
      url: '/systems-branding',
    },
    icon: <TelegramIcon />,
    technology: [],
  },
];
