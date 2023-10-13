import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Link from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import SectionSubTitle from 'common/SectionSubTitle';
import SectionEndButton from 'common/SectionEndButton';

// import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import ArticleIcon from '@mui/icons-material/Article';

const Priority3 = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={3}>
            <SectionSubTitle align="left">
              Academic Plan Priority 3
            </SectionSubTitle>
            <Typography component="p" color={'textSecondary'}>
              Empowering teaching and learning to push the boundaries of how to
              design and deliver the best learning experience for students.
            </Typography>
          </Box>
          <List disablePadding>
            {[
              /*
              {
                icon: <InfoIcon />,
                title: 'Details',
                subtitle: (
                  <Typography fontSize="small">
                    Amount: $10,000
                    <br />
                    Dates: Fall 2023
                  </Typography>
                ),
              },
              */
              {
                icon: <HelpIcon />,
                title: 'Research Question',
                subtitle: (
                  <Typography fontSize="small">
                    Workplace Integrated Classroom: A Case-Study Review of a New
                    Pedagogical Approach using a Smart City built with LEGO®
                    Bricks
                  </Typography>
                ),
              },
              {
                icon: <ArticleIcon />,
                title: 'Publishings',
                subtitle: (
                  <Box>
                    <Typography fontSize="small">
                      Read the{' '}
                      <Link
                        to="https://wic.codeadam.ca"
                        component={LinkRouter}
                        variant="inherit"
                        color={theme.palette.primary.main}
                      >
                        WIC White paper
                      </Link>
                      .
                    </Typography>
                  </Box>
                ),
              },
            ].map((item, index) => (
              <ListItem key={index} disableGutters alignItems="flex-start">
                <ListItemAvatar>
                  <Box
                    component={Avatar}
                    variant={'rounded'}
                    color={theme.palette.primary.dark}
                    bgcolor={`${theme.palette.primary.light}22`}
                  >
                    {item.icon}
                  </Box>
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={item.subtitle} />
              </ListItem>
            ))}
          </List>
          <SectionEndButton
            align="left"
            text="Fund Information"
            href="https://humber.ca/academic-division/academic-plan"
          ></SectionEndButton>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box component={Card} boxShadow={4} height="100%" width="100%">
            <Box
              component={CardMedia}
              height="100%"
              width="100%"
              minHeight={300}
              image="images/grants/city-satellite.jpg"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Priority3;
