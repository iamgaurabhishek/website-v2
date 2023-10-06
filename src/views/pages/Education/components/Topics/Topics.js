import React from 'react';

import Box from '@mui/material/Box';

import SectionImageList from 'common/SectionImageList';

import { topics } from './data.js';

const Topics = () => {
  return (
    <Box>
      <SectionImageList data={topics} folder="/images/topics/" />
    </Box>
  );
};

export default Topics;
