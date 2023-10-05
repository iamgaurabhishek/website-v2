import React from 'react';

import Box from '@mui/material/Box';

const SectionImage = ({ src }) => (
  <Box
    display="flex"
    flexWrap="wrap"
    justifyContent="center"
    maxWidth={800}
    marginX="auto"
    marginBottom={2}
  >
    <img src={src} height="100%" width="100%" />
  </Box>
);

export default SectionImage;
