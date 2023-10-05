import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
// import { useTheme } from '@mui/material/styles';
// import { colors } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import WebbeeLogo from 'svg/logos/Webbee';
// import paletteTypes from 'common/paletteTypes';
import GitHubIcon from '@mui/icons-material/GitHub';

const Topbar = ({ onSidebarOpen }) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
    >
      <Box display={'flex'} alignItems={'center'}>
        <Box marginRight={{ xs: 0, sm: 0 }}>
          <IconButton onClick={onSidebarOpen} aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton href="https://github.com/BrickMMO">
            <GitHubIcon />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex" alignItems={'center'}>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
          <Box marginRight={2}>
            <Link underline="none" component="a" href="/" color="textPrimary">
              Home
            </Link>
          </Box>
          <Box marginX={2}>
            <Link
              underline="none"
              component="a"
              href="/education"
              color="textPrimary"
            >
              Education
            </Link>
          </Box>
          <Box marginX={2}>
            <Link
              underline="none"
              component="a"
              href="/funding"
              color="textPrimary"
            >
              Funding
            </Link>
          </Box>
          <Box marginX={2}>
            <Link
              underline="none"
              component="a"
              href="/commissions"
              color="textPrimary"
            >
              Commissions
            </Link>
          </Box>
          <Box marginLeft={2}>
            <Button
              variant="contained"
              color="primary"
              component="a"
              href="/get-started"
              size="large"
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
  setThemePalette: PropTypes.func.isRequired,
  paletteType: PropTypes.string.isRequired,
};

export default Topbar;
