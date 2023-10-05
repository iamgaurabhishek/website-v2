import React from 'react';

import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import ChairIcon from '@mui/icons-material/Chair';
import TvIcon from '@mui/icons-material/Tv';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';

import SectionFlag from 'common/SectionFlag';
import SectionTitle from 'common/SectionTitle';
import SectionSubTitle from 'common/SectionSubTitle';
import SectionEndButton from 'common/SectionEndButton';

const Wic = () => {
  const theme = useTheme();

  return (
    <Box>
      <SectionFlag>Teaching Method</SectionFlag>
      <SectionTitle>Workplace Integrated Classroom</SectionTitle>
      <SectionSubTitle>
        Providing students with a close to industry workplace experience while
        maintaining the comfort of the classroom.
      </SectionSubTitle>

      <Grid container spacing={2} marginY={3}>
        {[
          {
            title: 'Environment',
            subtitle:
              'Students are treated more like new employees than students. Classes are longer to more closely resemble a full workday.',
            icon: <ChairIcon />,
          },
          {
            title: 'Delivery',
            subtitle:
              'There are no lectures, assignments, homework, or tests. Students participate in stand up meetings and contribute to ongoing real projects.',
            icon: <TvIcon />,
          },
          {
            title: 'Teamwork',
            subtitle:
              'Students participate in a variety of different teams as members and leaders. ',
            icon: <GroupsIcon />,
          },
          {
            title: 'Learn by Doing',
            subtitle:
              'Students are taught by being assigned progressively harder and harder tasks in a variety of projects in different stages of development.',
            icon: <WorkIcon />,
          },
        ].map((item, i) => (
          <Grid key={i} item xs={12} md={6}>
            <ListItem
              component="div"
              disableGutters
              sx={{
                alignItems: 'flex-start',
                padding: 0,
              }}
            >
              <ListItemAvatar>
                <Box
                  component={Avatar}
                  width={50}
                  height={50}
                  marginBottom={2}
                  marginRight={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                >
                  {item.icon}
                </Box>
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={item.subtitle}
                primaryTypographyProps={{
                  variant: 'h6',
                  component: 'h4',
                  gutterBottom: true,
                  sx: { fontWeight: 700 },
                }}
                sx={{
                  margin: 0,
                }}
              />
            </ListItem>
          </Grid>
        ))}
      </Grid>

      <SectionEndButton
        text="Read the White Paper"
        href="https://wic.brickmmo.com"
      />
    </Box>
  );
};

export default Wic;
