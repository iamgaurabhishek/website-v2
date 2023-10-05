import React from 'react';

import Typography from '@mui/material/Typography';

const SectionFlag = ({ children }) => (
  <Typography
    sx={{
      textTransform: 'uppercase',
      fontWeight: 'medium',
    }}
    gutterBottom
    color="textSecondary"
    align="center"
  >
    {children}
  </Typography>
);

export default SectionFlag;
