import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

import SectionFlag from 'common/SectionFlag';
import SectionTitle from 'common/SectionTitle';
import SectionSubTitle from 'common/SectionSubTitle';
import SectionEndButton from 'common/SectionEndButton';

const List = () => {
  return (
    <Box>
      <SectionFlag>Commisions</SectionFlag>
      <SectionTitle>Custom build projects </SectionTitle>
      <SectionSubTitle>Check out our current projects:</SectionSubTitle>

      <Grid container spacing={4} marginBottom={4}>
        {[
          {
            media: 'images/commissions/humber.png',
            title: 'Humber College',
            subtitle: 'A custom logo build for our education partner!',
            link: '/commissions-humber',
          },
          {
            media: 'images/commissions/cdmo.png',
            title: 'Bio 2024',
            subtitle:
              'A minifig scale CDMO facility for the Bio 2024 conference!',
            // link: '/commissions-cdmo',
          },
          {
            media: 'images/commissions/brevisrefero.png',
            title: 'BrevisRefero',
            subtitle: 'A custom logo build for our industry partner!',
            // link: '/commissions-brevisrefero',
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i} marginTop={3}>
            <Box
              /*component={'a'}*/
              href={''}
              display={'block'}
              width={'100%'}
              height={'100%'}
              sx={{
                textDecoration: 'none',
              }}
            >
              <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                borderRadius={3}
                display={'flex'}
                flexDirection={'column'}
              >
                <CardMedia
                  image={item.media}
                  title={item.title}
                  sx={{
                    height: 240,
                  }}
                />
                <Box component={CardContent}>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    fontWeight={500}
                    align={'left'}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    align={'left'}
                    variant={'body2'}
                    color="textSecondary"
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box component={CardActions} justifyContent={'flex-end'}>
                  {item.link ? (
                    <Button
                      variant="text"
                      color="primary"
                      component={LinkRouter}
                      size="small"
                      to={item.link}
                    >
                      Learn More
                    </Button>
                  ) : (
                    <Typography variant="body2" color="textPrimary">
                      Coming Soon...
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <SectionEndButton text="Requst a Build" href="/contact" />
    </Box>
  );
};

export default List;
