/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import { Link as LinkRouter } from 'react-router-dom';

// import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import SectionFlag from 'common/SectionFlag';
import SectionTitle from 'common/SectionTitle';
import SectionLink from 'common/SectionLink';
import SectionImage from 'common/SectionImage';
import SectionButtonList from 'common/SectionButtonList';
import SectionSubTitle from 'common/SectionSubTitle';

import { systems, buttons } from './data.js';

const Systems = () => {
  const theme = useTheme();
  return (
    <Box>
      <SectionFlag>Systems</SectionFlag>
      <SectionTitle>Redeveloping Real World Systems</SectionTitle>
      <SectionImage src="/images/systems.png" />
      <SectionSubTitle>
        Integrate any of these systems into your BrickMMO smart city:
      </SectionSubTitle>

      <Grid container spacing={4} marginTop={3}>
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

                <Typography color="text.secondary">{item.subtitle}</Typography>

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

      <SectionLink title="View All Systems" href="/systems" />
      <SectionSubTitle>Have an idea for a system?</SectionSubTitle>
      <SectionButtonList data={buttons} />
    </Box>
  );
};

export default Systems;
