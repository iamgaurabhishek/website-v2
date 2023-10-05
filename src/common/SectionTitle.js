import React from 'react';

import Typography from '@mui/material/Typography';

const SectionTitle = ({ children }) => (
  <Typography fontWeight={700} variant="h2" align="center" gutterBottom>
    {children}
  </Typography>
);

export default SectionTitle;
