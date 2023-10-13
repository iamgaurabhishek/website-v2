import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
          <Link to="/" component={LinkRouter} underline="none">
            Home
          </Link>
        </Box>
        <Box marginX={2}>
          <Link to="/education" component={LinkRouter} underline="none">
            Education
          </Link>
        </Box>
        <Box marginX={2}>
          <Link to="/research" component={LinkRouter} underline="none">
            Research
          </Link>
        </Box>
        <Box marginX={2}>
          <Link to="/commissions" component={LinkRouter} underline="none">
            Commissions
          </Link>
        </Box>
        <Box marginLeft={2}>
          <Button
            variant="contained"
            color="primary"
            component={LinkRouter}
            size="large"
            to="/get-started"
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Topbar;
