import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const SectionLink = ({ title, href }) => (
  <Box marginY={2} display="flex" justifyContent="center">
    <Link size="large" component={LinkRouter} to={href}>
      {title}
    </Link>
  </Box>
);

export default SectionLink;
