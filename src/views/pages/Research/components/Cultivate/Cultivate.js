import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
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
// import ArticleIcon from '@mui/icons-material/Article';

const Cultivate = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={3}>
            <SectionSubTitle align="left">Cultivate Fund</SectionSubTitle>
            <Typography component={'p'} color={'textSecondary'}>
              Facilitating the Scholarship of Teaching and Learning (SoTL) by
              supporting faculty research the impact of teaching practices and
              tools.
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
                    Amount: $15,000
                    <br />
                    Dates: Summer 2023
                  </Typography>
                ),
              },
              */
              {
                icon: <HelpIcon />,
                title: 'Research Question',
                subtitle: (
                  <Typography fontSize="small">
                    What will postsecondary student perceptions be when using a
                    LEGO® constructed smart city to simulate real-life
                    application of programming concepts?
                  </Typography>
                ),
              },
              /*
              {
                icon: <ArticleIcon />,
                title: 'Publishings',
                subtitle: (
                  <Typography fontSize="small">
                    Published with JIPE. Pending peer review.
                  </Typography>
                ),
              },
              */
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
            href="https://humber.ca/research/sotl"
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
              image="images/grants/baseplates.jpg"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cultivate;
