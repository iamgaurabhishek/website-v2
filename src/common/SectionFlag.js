import React from 'react';

import Typography from '@mui/material/Typography';

const SectionFlag = ({ children }) => (
  <Typography
    gutterBottom
    color="textSecondary"
    align="center"
    sx={{
      textTransform: 'uppercase',
      fontWeight: 'medium',
    }}
  >
    {children}
  </Typography>
);

export default SectionFlag;
