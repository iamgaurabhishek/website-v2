import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const SectionImageList = ({ data }) => (
  <Box
    display="flex"
    flexWrap="wrap"
    justifyContent="center"
    marginX="auto"
    maxWidth={800}
    marginY={2}
  >
    {data.map((item, i) => {
      return (
        <Box marginX={1} marginY={1} key={i}>
          <Button
            to={item.url}
            color="secondary"
            variant="contained"
            size="medium"
            component={LinkRouter}
          >
            {item.title}
          </Button>
        </Box>
      );
    })}
  </Box>
);

export default SectionImageList;
