import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const SectionImageList = ({ data }) => (
  <Box
    display="flex"
    flexWrap="wrap"
    justifyContent="center"
    marginX="auto"
    maxWidth={800}
    marginBottom={2}
  >
    {data.map((item, i) => {
      return (
        <Box marginX={1} marginY={1} key={i}>
          <Link to={item.url}>
            <Button
              color="secondary"
              variant="contained"
              size="medium"
              component="span"
            >
              {item.title}
            </Button>
          </Link>
        </Box>
      );
    })}
  </Box>
);

export default SectionImageList;
