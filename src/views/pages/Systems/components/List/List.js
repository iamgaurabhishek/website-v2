/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import { Link as LinkRouter } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';

import { systems } from './data.js';

const List = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        >
          Systems
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
          What is a system?
        </Box>
        <Box align="center">
          <Box marginBottom={4} maxWidth={800}>
            <Typography
              component={'p'}
              color={'textSecondary'}
              align={'center'}
              marginBottom={2}
            >
              A system could be anything from a redeveloped version of
              Twitter/X, to an API that enforces the LEGO® colour palette, to a
              physical control panel built with LEGO® bricks.
            </Typography>
            <Typography
              variant={'h6'}
              component={'p'}
              color={'textSecondary'}
              align={'center'}
            >
              Systems that have been completed, or are currently in development:
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Grid container spacing={4}>
          {systems.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i} marginBottom={3}>
              <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                borderRadius={4}
                display={'flex'}
                flexDirection={'column'}
              >
                <Box component={CardContent}>
                  <Box
                    component={Avatar}
                    width={50}
                    height={50}
                    marginBottom={2}
                    bgcolor={theme.palette.primary.main}
                    color={theme.palette.background.paper}
                  >
                    {item.icon}
                  </Box>

                  <Typography variant={'h6'} gutterBottom fontWeight={500}>
                    {item.title}
                  </Typography>

                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>

                  <Grid container marginTop={1}>
                    {item.technology.map((item) => (
                      <Grid item marginRight={1}>
                        <img
                          src={'https://console.codeadam.ca/api/image/' + item}
                          width={20}
                          alt=""
                        />
                      </Grid>
                    ))}
                  </Grid>

                  {/*
                  <Box marginTop={1}>
                    <Button
                      color="primary"
                      variant="contained"
                      component={LinkRouter}
                      to={item.link.url}
                    >
                      {item.link.text}
                    </Button>
                  </Box>
                  */}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/*
      <Box marginTop={3}>
        <Typography
          variant={'h5'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Have an idea for a system?
        </Typography>
        <Box marginTop={2} display={'flex'} justifyContent={'center'}>
          <Box marginRight={2}>
            <Button
              component={'a'}
              href={'/contact'}
              variant="contained"
              color="secondary"
              size="large"
              margin
            >
              Suggest a System
            </Button>
          </Box>
          <Box>
            <Button
              component={'a'}
              href={'/contact'}
              variant="outlined"
              color="secondary"
              size="large"
            >
              Build a System
            </Button>
          </Box>         
        </Box>  
      </Box>
      */}
    </Box>
  );
};

export default List;
