import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Counter = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Box marginBottom={{ xs: 4, sm: 6, md: 8 }}>
        <Grid container spacing={2}>
          {[
            {
              title: 9,
              label: 'Paid Positions',
              subtitle: '9+ paid part time jobs for students created.',
              suffix: '+',
            },
            {
              title: 50,
              label: 'BrickMMO Projects',
              subtitle: '50+ ongoing BrickMMO projects and systems.',
              suffix: '+',
            },
            {
              title: 3000,
              label: 'Student Hours',
              subtitle: '3000+ hours of student contributions.',
              suffix: '+',
            },
          ].map((item, i) => (
            <Grid key={i} item xs={12} md={4}>
              <Typography variant="h3" align={'center'} gutterBottom>
                <Box fontWeight={600}>
                  <VisibilitySensor
                    onChange={(isVisible) => setViewPortVisibility(isVisible)}
                    delayedCall
                  >
                    <CountUp
                      redraw={false}
                      end={viewPortEntered ? item.title : 0}
                      start={0}
                      suffix={item.suffix}
                    />
                  </VisibilitySensor>
                </Box>
              </Typography>
              <Typography align={'center'} variant="h6" gutterBottom>
                {item.label}
              </Typography>
              <Typography color="text.secondary" align={'center'} component="p">
                {item.subtitle}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Counter;
