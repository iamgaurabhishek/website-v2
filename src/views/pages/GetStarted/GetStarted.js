/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import validator from 'validator';
import { Link as LinkRouter } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TikTokIcon from 'svg/logos/TikTok';
import Container from 'common/Container';
import { light as lightGreen } from 'theme/palette--green';
import axios from 'axios';

const GetStarted = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  // STATES
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [thankYouMessage, setThankYouMessage] = useState('');

  const checkEmail = () => {
    if (!email) {
      setError('Email cannot be empty');
      return false;
    }
    if (!validator.isEmail(email)) {
      setError('Please enter a valid email');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmitButton = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASEURL}/email/send`,
        {
          name: 'Getting Started Submission Form',
          email,
        },
      );
      const { data } = response;
      setThankYouMessage(data?.message);
      renderThankYouMessage();
      setEmail('');
    } catch (err) {
      console.log(err);
    }
  };

  const renderThankYouMessage = () => {
    setTimeout(() => {
      setThankYouMessage('');
    }, 5000);
  };

  return (
    <Box
      minHeight={'calc(100vh - 64px - 183px)'}
      height={'100%'}
      display={'flex'}
      alignItems={'center'}
    >
      <Container>
        <Grid container spacing={6}>
          <Grid item container justifyContent={'center'} xs={12} md={6}>
            <Box
              height={'100%'}
              width={'100%'}
              maxWidth={{ xs: 500, md: '100%' }}
            >
              <img
                src="images/coming-soon.png"
                height={'100%'}
                width={'100%'}
                alt=""
              />
            </Box>
          </Grid>
          <Grid
            item
            container
            alignItems={'center'}
            justifyContent={'center'}
            xs={12}
            md={6}
          >
            <Box>
              <Typography
                variant="h3"
                component={'h3'}
                align={isMd ? 'left' : 'center'}
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Collaborate Soon
              </Typography>
              <Typography
                component="p"
                color="textSecondary"
                align={isMd ? 'left' : 'center'}
                marginBottom={2}
              >
                We will be inviting other developers to collaborate on the
                BrickMMO project soon! Signup for our emails newsletter to be
                notified.
              </Typography>
              <form noValidate autoComplete="off">
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                  marginBottom={4}
                >
                  <Box
                    flex={'1 1 auto'}
                    component={TextField}
                    label="Enter your email"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    height={54}
                    error={error !== ''}
                    helperText={error}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={checkEmail}
                  />
                  <Box
                    component={Button}
                    variant="contained"
                    color="primary"
                    size="large"
                    height={54}
                    marginTop={{ xs: 2, sm: 0 }}
                    marginLeft={{ sm: 2 }}
                    disabled={!email || error !== ''}
                    onClick={() => handleSubmitButton()}
                  >
                    Subscribe
                  </Box>
                </Box>
              </form>
              {thankYouMessage.length > 0 && (
                <Typography
                  component="p"
                  color={lightGreen?.primary?.dark}
                  marginBottom={2}
                >
                  {thankYouMessage}
                </Typography>
              )}
              <Box display="flex" flexWrap="wrap" alignItems="center">
                <IconButton
                  component={LinkRouter}
                  to="https://www.youtube.com/channel/UCJJPeP10HxC1qwX_paoHepQ"
                  marginRight={1}
                >
                  <InstagramIcon color="primary" />
                </IconButton>
                <IconButton
                  component={LinkRouter}
                  to="https://www.youtube.com/channel/UCJJPeP10HxC1qwX_paoHepQ"
                  marginRight={1}
                >
                  <YouTubeIcon color="primary" />
                </IconButton>
                <IconButton
                  component={LinkRouter}
                  to="https://twitter.com/brickmmo"
                  marginRight={1}
                >
                  <TwitterIcon color="primary" />
                </IconButton>
                <IconButton
                  component={LinkRouter}
                  to="https://github.com/BrickMMO"
                  marginRight={1}
                >
                  <GitHubIcon color="primary" />
                </IconButton>
                <IconButton
                  component={LinkRouter}
                  to="https://www.tiktok.com/@brickmmo"
                  marginRight={1}
                >
                  <TikTokIcon
                    height="24px"
                    width="24px"
                    color={theme.palette.primary.main}
                  />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GetStarted;
