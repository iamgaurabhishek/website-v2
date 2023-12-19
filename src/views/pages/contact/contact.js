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


const contact = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
      defaultMatches: true,
    });
  
    // STATES
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [thankYouMessage, setThankYouMessage] = useState('');
  
    const checkForm = () => {
      if (!name) {
        setError('Name cannot be empty');
        return false;
      }
      if (!message) {
        setError('Message cannot be empty');
        return false;
      }
      setError('');
      return true;
    };
  
    const handleSubmitButton = async () => {
      try {
        if (!checkForm()) {
          return;
        }
  
        const response = await axios.post(
          `${process.env.REACT_APP_BASEURL}/email/send`,
          {
            name,
            message,
          },
        );
        const { data } = response;
        setThankYouMessage(data?.message);
        renderThankYouMessage();
        setName('');
        setMessage('');
      } catch (err) {
        console.error(err);
      }
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
            
            <form noValidate autoComplete="off">
              <Box>
               
                <Box
                  flex={'1 1 auto'}
                  component={TextField}
                  label="Full Name"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  height={54}
                  error={error !== '' && !name}
                  helperText={error && !name ? error : ''}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Box
                  flex={'1 1 auto'}
                  component={TextField}
                  label="Your Message"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  multiline
                  rows={4}
                  height={54}
                  error={error !== '' && !message}
                  helperText={error && !message ? error : ''}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Box>
            </form>
          </Grid>
        </Container>
      </Box>
    );
  };
  
  export default contact;