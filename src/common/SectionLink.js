import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SectionLink = ({ title, href }) => (
  <Box marginTop={2} display="flex" justifyContent="center">
    <Link to={href}>
      <Typography color="textPrimary" size="large" component="span">
        {title}
      </Typography>
    </Link>
  </Box>
);

export default SectionLink;
