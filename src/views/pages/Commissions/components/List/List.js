import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

import SectionFlag from 'common/SectionFlag';
import SectionTitle from 'common/SectionTitle';
import SectionSubTitle from 'common/SectionSubTitle';
import SectionEndButton from 'common/SectionEndButton';

import { commissions } from './data.js';

const List = () => {
  return (
    <Box>
      <SectionFlag>Commisions</SectionFlag>
      <SectionTitle>Custom Commissioned Projects </SectionTitle>
      <SectionSubTitle>Check out our current commissions:</SectionSubTitle>

      <Grid container spacing={4} marginTop={3}>
        {commissions.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i} marginBottom={3}>
            <Box
              component={Card}
              width={'100%'}
              height={'100%'}
              borderRadius={4}
              display={'flex'}
              flexDirection={'column'}
            >
              <CardMedia
                image={item.media}
                title={item.title}
                sx={{
                  height: 200,
                }}
              />
              <Box component={CardContent}>
                <Typography variant={'h6'} gutterBottom fontWeight={500}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.subtitle}</Typography>

                {item.link ? (
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
                ) : (
                  ''
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <SectionEndButton text="Request a Build" href="/contact" />
    </Box>
  );
};

export default List;
