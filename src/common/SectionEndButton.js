import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const SectionEndButton = ({ text, href }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      marginX="auto"
      maxWidth={800}
      marginBottom={2}
    >
      <Link to={href}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          component="span"
          fullWidth={isMd ? false : true}
        >
          {text}
        </Button>
      </Link>
    </Box>
  );
};

export default SectionEndButton;
