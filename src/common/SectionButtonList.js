import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const SectionImageList = ({ data }) => (
  <Box
    display="flex"
    flexWrap="wrap"
    justifyContent="center"
    maxWidth={800}
    marginX="auto"
    marginBottom={2}
  >
    {data.map((item, i) => {
      return (
        <Box marginX={1} marginY={1} key={i}>
          <Button
            color="secondary"
            variant="contained"
            size="medium"
            href={item.url}
          >
            {item.title}
          </Button>
        </Box>
      );
    })}
  </Box>
);

export default SectionImageList;
