import React, { useState } from 'react';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import validator from 'validator';
import { Link as LinkRouter } from 'react-router-dom';
import { light as lightGreen } from '../../../../../theme/palette--green';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TikTokIcon from 'svg/logos/TikTok';

const SignUp = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [thankYouMessage, setThankYouMessage] = useState('');

  const checkName = () => {
    if (!name) {
      setNameError('Name cannot be empty');
      return false;
    }
    setNameError('');
    return true;
  };

  const checkEmail = () => {
    if (!email) {
      setEmailError('Email cannot be empty');
      return false;
    }
    if (!validator.isEmail(email)) {
      setEmailError('Please enter a valid email');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSubmitButton = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASEURL}/email/send`,
        {
          name,
          email,
        },
      );
      const { data } = response;
      setThankYouMessage(data?.message);
      renderThankYouMessage();
      setEmail('');
      setName('');
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
    <Box>
      <Grid container spacing={6}>
        <Grid item container justifyContent={'center'} xs={12} md={6}>
          <Box
            height={'100%'}
            width={'100%'}
            maxWidth={{ xs: 500, md: '100%' }}
          >
            <img
              src="images/hero/sponsor.png"
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
              CDMO Facility at BIO2024
            </Typography>
            <Typography
              component="p"
              color="textSecondary"
              align={isMd ? 'left' : 'center'}
              marginBottom={2}
            >
              Interested in sponsoring the BrickMMO CDMO build?
            </Typography>
            <form noValidate autoComplete="off">
              <Box
                component={TextField}
                label="Enter your name"
                variant="outlined"
                color="primary"
                fullWidth
                marginBottom={4}
                error={nameError !== ''}
                helperText={nameError}
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={checkName}
              />
              <Box
                component={TextField}
                label="Enter your email"
                variant="outlined"
                color="primary"
                fullWidth
                marginBottom={4}
                error={emailError !== ''}
                helperText={emailError}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={checkEmail}
              />
              {thankYouMessage?.length > 0 && (
                <Typography
                  component="p"
                  color={lightGreen?.primary?.dark}
                  marginBottom={2}
                >
                  {thankYouMessage}
                </Typography>
              )}
              <Box
                component={Button}
                variant="contained"
                color="primary"
                size="large"
                marginBottom={4}
                disabled={
                  !name || !email || nameError !== '' || emailError !== ''
                }
                onClick={() => handleSubmitButton()}
              >
                Submit
              </Box>
            </form>
            <Box display="flex" flexWrap="wrap" alignItems="center">
              <IconButton
                component={LinkRouter}
                to="https://www.instagram.com/brickmmo"
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
    </Box>
  );
};

export default SignUp;
