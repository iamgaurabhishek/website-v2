import React from 'react';

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
      maxWidth={800}
      marginX="auto"
      marginBottom={2}
    >
      <Button
        color={'primary'}
        variant={'contained'}
        size={'large'}
        href={href}
        fullWidth={isMd ? false : true}
      >
        {text}
      </Button>
    </Box>
  );
};

export default SectionEndButton;
