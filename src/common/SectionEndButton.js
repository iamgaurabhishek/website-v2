import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const SectionEndButton = ({ text, href, align = 'center' }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent={align}
      marginX="auto"
      maxWidth={800}
      marginY={2}
    >
      <Button
        color="primary"
        variant="contained"
        size="large"
        component={LinkRouter}
        fullWidth={isMd ? false : true}
        to={href}
      >
        {text}
      </Button>
    </Box>
  );
};

export default SectionEndButton;
