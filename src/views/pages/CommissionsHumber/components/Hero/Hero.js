import React from 'react';

// import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

const Hero = () => {
  const GridItemHeadlineBlock = () => (
    <Box>
      <Typography
        variant="h2"
        component="h1"
        color="#fff"
        sx={{
          fontWeight: 700,
        }}
      >
        Humber College Logo
      </Typography>
      <Box>
        <Typography
          variant="h4"
          coponent="h2"
          color="#fff"
          sx={{
            fontWeight: 600,
          }}
        >
          75cm x 75cm greebled version of the Humber College logo.
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box>
      <GridItemHeadlineBlock />
    </Box>
  );
};

export default Hero;
