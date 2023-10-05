import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const SidebarNav = ({ pages, onClose }) => {
  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'flex-end'}
        onClick={() => onClose()}
      >
        <IconButton>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box paddingX={2} paddingBottom={2}>
        <Box>
          {pages.map((item, i) => (
            <Box key={i} marginBottom={4}>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: 1,
                  display: 'block',
                }}
              >
                {item.title}
              </Typography>
              <Grid container spacing={1}>
                {item.pages.map((item, i) => (
                  <Grid item xs={6} key={i}>
                    <Link to={item.href} onClick={() => onClose()}>
                      <Typography color="textPrimary">{item.title}</Typography>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
        <Box>
          <Button
            variant="outlined"
            fullWidth
            component="a"
            href="/docs-introduction"
          >
            Documentation
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="https://material-ui.com/store/items/webbee-landing-page/"
          >
            Purchase now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.array.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
