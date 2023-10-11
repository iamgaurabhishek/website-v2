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

const Greenfield = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={3}>
            <SectionSubTitle align="left">Greenfield Fund</SectionSubTitle>
            <Typography component={'p'} color={'textSecondary'}>
              Facilitating applied research and regional partnerships to respond
              to the health, economic, and environmental crises brought about by
              the COVID-19 pandemic and climate change.
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
                    Amount: $60,000
                    <br />
                    Dates: Winter 2024
                  </Typography>
                ),
              },
              */
              {
                icon: <HelpIcon />,
                title: 'Research Question',
                subtitle: (
                  <Typography fontSize="small">
                    What effect will a revised 20/80 policy have on engaging and
                    developing existing programming talent?
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
              image="images/grants/city-block.jpg"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Greenfield;
