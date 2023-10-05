import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';

const Topbar = ({ onSidebarOpen }) => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
      <Box display={'flex'} alignItems={'center'}>
        <IconButton onClick={onSidebarOpen} aria-label={'Menu'}>
          <MenuIcon />
        </IconButton>
        <IconButton href={'https://github.com/BrickMMO'}>
          <GitHubIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginRight={2}>
          <Link to="/">
            <Typography color="textPrimary" component={'span'}>
              Home
            </Typography>
          </Link>
        </Box>
        <Box marginX={2}>
          <Link to="/education">
            <Typography color="textPrimary" component="span">
              Education
            </Typography>
          </Link>
        </Box>
        <Box marginX={2}>
          <Link to="/funding">
            <Typography color="textPrimary" component="span">
              Funding
            </Typography>
          </Link>
        </Box>
        <Box marginX={2}>
          <Link to="/commissions">
            <Typography color="textPrimary" component="span">
              Commissions
            </Typography>
          </Link>
        </Box>
        <Box marginLeft={2}>
          <Link to="/getting-started">
            <Button
              variant="contained"
              color="primary"
              component="span"
              size="large"
            >
              Get Started
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Topbar;
