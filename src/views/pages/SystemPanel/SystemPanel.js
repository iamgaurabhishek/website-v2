/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import { Link as LinkRouter } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';

// import Container from 'common/Container';

// import { Hero, Benefits, SignUp } from './components';

const SystemPanel = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <h1>System Panel</h1>
  );
};

export default SystemPanel;
