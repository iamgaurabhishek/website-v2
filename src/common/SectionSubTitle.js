import React from 'react';

import Typography from '@mui/material/Typography';

const SectionSubTitle = ({ children }) => (
  <Typography
    variant="h4"
    compoment="h3"
    color="textSecondary"
    align="center"
    gutterBottom
  >
    {children}
  </Typography>
);

export default SectionSubTitle;
