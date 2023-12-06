import React from 'react';

import Box from '@mui/material/Box';

const SectionImage = ({ src }) => (
  <Box
    display="flex"
    flexWrap="wrap"
    justifyContent="center"
    marginX="auto"
    marginY={2}
    maxWidth={600}
  >
    <img src={src} height="100%" width="100%" alt="" />
  </Box>
);

export default SectionImage;
