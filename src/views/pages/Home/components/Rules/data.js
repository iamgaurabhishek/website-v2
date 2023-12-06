import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const faqs = [
  {
    title: 'Cameras',
    subtitle: (
      <Box>
        <Typography component="p" marginBottom={1}>
          LEGO® does not make cameras, but they are crucial to many BrickMMO
          systems including{' '}
          <Link to="/systems-gps" underline="none">
            GPS
          </Link>
          ,{' '}
          <Link to="/systems-streetview" underline="none">
            Streetview
          </Link>
          ,{' '}
          <Link to="/systems-places" underline="none">
            Places
          </Link>
          , and more.
        </Typography>
        <Typography component="p">
          BrickMMO uses the{' '}
          <Link to="https://pixycam.com/pixy2/" underline="none">
            Pixy2
          </Link>{' '}
          robot vision sensor. This sensor comes available with a pre-installed
          firmware that speaks the LEGO® sensor protocol and a MINDSTORMS®
          compatible RJ12 cable
        </Typography>
      </Box>
    ),
  },
  {
    title: 'Electricity',
    subtitle: (
      <Box>
        <Typography component="p" marginBottom={1}>
          LEGO® hubs need electricity and mobile robots need electricity but
          must be free of cables.
        </Typography>
        <Typography component="p">
          BrickMMO has developed inductive charging adaptors compatible with
          LEGO® SPIKE™ and MINDSTORMS® hubs. View the{' '}
          <Link to="/systems-inductive-charging">Inductive Charging</Link>{' '}
          system for more information.
        </Typography>
      </Box>
    ),
  },
  {
    title: 'Cables',
    subtitle: (
      <Box>
        <Typography component="p" marginBottom={2}>
          We need cables. And we need long cables. Using standard RJ12
          connectors and 6P6C cables we can create custom length MINDSTORMS®
          compatible cables. View the{' '}
          <Link to="/systems-inductive-charging">Custom Cables</Link> system for
          more information.
        </Typography>
      </Box>
    ),
  },
];
