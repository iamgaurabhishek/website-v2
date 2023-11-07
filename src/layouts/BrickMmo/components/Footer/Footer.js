import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import useTheme from '@mui/material/styles/useTheme';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

import TikTokIcon from 'svg/logos/TikTok';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box display="flex" flexWrap="wrap" alignItems="center">
            <IconButton
              component={LinkRouter}
              to="https://www.youtube.com/channel/UCJJPeP10HxC1qwX_paoHepQ"
              marginRight={1}
            >
              <InstagramIcon color="primary" />
            </IconButton>
            <IconButton
              component={LinkRouter}
              to="https://www.youtube.com/channel/UCJJPeP10HxC1qwX_paoHepQ"
              marginRight={1}
            >
              <YouTubeIcon color="primary" />
            </IconButton>
            <IconButton
              component={LinkRouter}
              to="https://twitter.com/brickmmo"
              marginRight={1}
            >
              <TwitterIcon color="primary" />
            </IconButton>
            <IconButton
              component={LinkRouter}
              to="https://github.com/BrickMMO"
              marginRight={1}
            >
              <GitHubIcon color="primary" />
            </IconButton>
            <IconButton
              component={LinkRouter}
              to="https://www.tiktok.com/@brickmmo"
              marginRight={1}
            >
              <TikTokIcon
                height="24px"
                width="24px"
                color={theme.palette.primary.main}
              />
            </IconButton>
          </Box>

          <Box display="flex" flexWrap="wrap" alignItems="center">
            {/*
            <Box marginTop={1} marginRight={2}>
              <Button
                variant="contained"
                color="secondary"
                component={LinkRouter}
                to="https://docs.brickmmo.com"
              >
                Documentation
              </Button>
            </Box>
            */}
            <Box marginTop={1}>
              <Button
                variant="outlined"
                color="secondary"
                component={LinkRouter}
                to="/get-started"
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} marginY={0}>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          &copy; BrickMMO. {year}. All rights reserved.
        </Typography>
        <Typography
          marginTop={1}
          align="center"
          variant="subtitle2"
          color="textSecondary"
        >
          LEGO, the LEGO logo and the Minifigure are trademarks of the LEGO
          Group.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
