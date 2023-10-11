import React from 'react';

import Typography from '@mui/material/Typography';

const SectionSubTitle = ({ align = 'center', children }) => (
  <Typography
    variant="h4"
    compoment="h3"
    color="textSecondary"
    gutterBottom
    align={align}
  >
    {children}
  </Typography>
);

export default SectionSubTitle;
