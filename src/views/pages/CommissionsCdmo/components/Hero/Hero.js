import React from 'react';

// import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
        Biologics Manufacturing
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
          Construction of a 1:25 scale interactive biologics CDMO facility
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box
      minHeight={{ xs: 'auto', md: 'calc(100vh - 64px)' }}
      height={'auto'}
      position={'relative'}
      sx={{
        backgroundImage: 'url("images/commissions/cdmo-background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundAttachment: 'fixed',
        '&:after': {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: '100%',
          width: '100%',
          content: '" "',
          zIndex: 1,
          backgroundColor: '#001d43',
          backgroundAttachment: 'fixed',
          opacity: 0.7,
        },
      }}
    >
      <Box
        position={{ xs: 'relative', md: 'absolute' }}
        top={{ xs: 0, md: '50%' }}
        width={'100%'}
        height={'auto'}
        sx={{
          transform: { md: 'translateY(-50%)' },
        }}
        zIndex={2}
      >
        <Container>
          <GridItemHeadlineBlock />
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
