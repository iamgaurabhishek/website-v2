import React from 'react';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import RadioIcon from '@mui/icons-material/Radio';

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
];

export const buttons = [
  {
    title: 'Suggest a System',
    url: '/systems-suggest',
  },
  {
    title: 'Build a System',
    url: '/systems-build',
  },
];
