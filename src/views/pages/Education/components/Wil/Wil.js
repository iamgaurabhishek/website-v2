import React from 'react';
// import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';

// import ChairIcon from '@mui/icons-material/Chair';
// import TvIcon from '@mui/icons-material/Tv';
// import GroupsIcon from '@mui/icons-material/Groups';
// import WorkIcon from '@mui/icons-material/Work';

const Wil = () => {
  // const theme = useTheme();

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
          Teaching Method
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
        >
          Workplace Integrated Learning
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Providing students with a close to industry workplace experience while
          <br />
          maintaining the comfort of the classroom.
        </Typography>
      </Box>
      {/*
      <Grid container spacing={4}>
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
      */}
      <Box marginTop={3} display={'flex'} justifyContent={'center'}>
        <Button
          color={'primary'}
          variant={'contained'}
          size={'large'}
          href="https://wic.brickmmo.com"
        >
          Read the White paper
        </Button>
      </Box>
    </Box>
  );
};

export default Wil;
