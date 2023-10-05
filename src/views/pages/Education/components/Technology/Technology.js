import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Technology = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

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
          Technology
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
        >
          70% of code was written by students
        </Box>
        <Typography
          variant="h5"
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Providing students with experience in many popular
          <br />
          programming languages, frameworks, and libraries
        </Typography>
      </Box>
      <Grid
        container
        spacing={4}
        flexDirection={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          justifyContent={'center'}
          xs={12}
          md={6}
          width={'100%'}
        >
          <Box height={'100%'} width={'100%'} maxWidth={600}>
            <img src="images/screens.png" width={'100%'} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container alignItems={'center'}>
          <Box data-aos={isMd ? 'fade-left' : 'fade-up'}>
            <Box marginBottom={2}>
              <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                BrickMMO has 50+ online assets
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                From documentation, to small online tools, admin control panels,
                APIs, CLIs, and this website.
              </Typography>
              <Typography color="text.secondary" marginBottom={2}>
                Assets use a variety of different technologies ensuring students
                can contribute from day one.
              </Typography>
              <Button
                component={'a'}
                href={'/systems'}
                variant="contained"
                color="secondary"
                size="large"
                fullWidth={isMd ? false : true}
                marginTop={4}
              >
                View Systems
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent={'center'}
        maxWidth={800}
        marginX={'auto'}
      >
        {[
          {
            image: 'composer.png',
            url: 'https://getcomposer.org/',
          },
          {
            image: 'docker.png',
            url: 'https://www.docker.com/',
          },
          {
            image: 'es6.png',
            url: 'http://es6-features.org/',
          },
          {
            image: 'git.png',
            url: 'https://git-scm.com/',
          },
          {
            image: 'github.png',
            url: 'https://github.com/',
          },
          {
            image: 'google-cloud.png',
            url: 'https://cloud.google.com/',
          },
          {
            image: 'html.png',
            url: 'https://www.w3.org/html/',
          },
          {
            image: 'javascript.png',
            url: 'https://www.w3.org/standards/webdesign/script',
          },
          {
            image: 'css.png',
            url: 'https://www.w3.org/Style/CSS/',
          },
          {
            image: 'php.png',
            url: 'https://php.net',
          },
          {
            image: 'laravel.png',
            url: 'https://laravel.com/',
          },
          {
            image: 'markdown.png',
            url: 'https://daringfireball.net/projects/markdown/syntax',
          },
          {
            image: 'mongo.png',
            url: 'https://www.mongodb.com/',
          },
          {
            image: 'mui.png',
            url: 'https://mui.com/',
          },
          {
            image: 'mysql.png',
            url: 'https://www.mysql.com/',
          },
          {
            image: 'nodejs.png',
            url: 'https://nodejs.org/',
          },
          {
            image: 'npm.png',
            url: 'https://www.npmjs.com/',
          },
          {
            image: 'pug.png',
            url: 'https://pugjs.org/',
          },
          {
            image: 'python.png',
            url: 'https://www.python.org/',
          },
          {
            image: 'raspberry-pi.png',
            url: 'https://www.raspberrypi.org/',
          },
          {
            image: 'typescript.png',
            url: 'https://www.typescriptlang.org/',
          },
          {
            image: 'vue.png',
            url: 'https://vuejs.org/',
          },
        ].map((item, i) => (
          <Box marginTop={3} marginX={2} key={i}>
            <Box component="a" href={item.url}>
              <Box
                component="img"
                height={'50px'}
                src={'/images/topics/' + item.image}
                alt="..."
                sx={
                  {
                    /*filter: 'grayscale(1)',*/
                  }
                }
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Technology;
