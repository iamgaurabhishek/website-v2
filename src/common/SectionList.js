import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SectionList = ({ data }) => (
  <Box>
    {data.map((item, i) => {
      return (
        <Typography
          key={i}
          variant="h5"
          component="h4"
          color="textSecondary"
          align="center"
          marginBottom={1}
        >
          {item}
        </Typography>
      );
    })}
  </Box>
);

export default SectionList;
