import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';

const SectionImageList = ({ data, folder }) => (
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
        <Box marginTop={2} marginX={2} key={i}>
          <Link to={item.url}>
            <Box
              component="img"
              height="50px"
              src={(folder ? folder : '/images/') + item.image}
              alt={item.title}
            />
          </Link>
        </Box>
      );
    })}
  </Box>
);

export default SectionImageList;
