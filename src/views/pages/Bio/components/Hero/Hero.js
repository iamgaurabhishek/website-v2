import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Hero = () => {
  const theme = useTheme();

  const GridItemHeadlineBlock = () => (
    <Box>
      <Typography
        variant="h2"
        align="left"
        gutterBottom
        sx={{
          color: theme.palette.common.white,
          fontWeight: 900,
        }}
      >
        Digital conference
        <br />
        for designers
      </Typography>
      <Box>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: theme.palette.common.white,
            fontWeight: 400,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Eu urna, quam adipiscing eu tincidunt tincidunt dictumst.
          <br />
          Turpis cursus arcu risus amet at. Turpis.
        </Typography>
      </Box>
    </Box>
  );

  const GridItemFormBlock = () => {
    const today = new Date();
    const date = new Date('June 3, 2024 9:00 am');
    const dateDiff = Math.ceil(Math.abs(today - date) / 1000);

    const days = Math.floor(dateDiff / 60 / 60 / 24);
    const hours = Math.floor((dateDiff / 60 / 60) % 24);
    const minutesCalc = Math.floor((dateDiff / 60) % 60);
    const secondsCalc = Math.floor(dateDiff % 60);

    const [minutes, setMinutes] = useState(minutesCalc);
    const [seconds, setSeconds] = useState(secondsCalc);
    useEffect(() => {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    });

    return (
      <Box
        padding={{ xs: 3, sm: 6 }}
        width={'100%'}
        component={Card}
        borderRadius={2}
        boxShadow={4}
      >
        <Box
          display="flex"
          flexDirection={'row'}
          justifyContent={'space-around'}
        >
          <Box display="flex" flexDirection={'column'} alignItems={'center'}>
            <Typography variant={'h3'} fontWeight={900}>
              {days}
            </Typography>
            <Typography fontWeight={700}>Days</Typography>
          </Box>
          <Box display="flex" flexDirection={'column'} alignItems={'center'}>
            <Typography variant={'h3'} fontWeight={900}>
              {hours}
            </Typography>
            <Typography fontWeight={700}>Hours</Typography>
          </Box>
          <Box display="flex" flexDirection={'column'} alignItems={'center'}>
            <Typography variant={'h3'} fontWeight={900}>
              {minutes}
            </Typography>
            <Typography fontWeight={700}>Minutes</Typography>
          </Box>
          <Box display="flex" flexDirection={'column'} alignItems={'center'}>
            <Typography variant={'h3'} fontWeight={900}>
              {seconds}
            </Typography>
            <Typography fontWeight={700}>Seconds</Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemFormBlock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
