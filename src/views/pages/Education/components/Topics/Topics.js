import React from 'react';

import Box from '@mui/material/Box';

import SectionFlag from 'common/SectionFlag';
import SectionImageList from 'common/SectionImageList';

import { topics } from './data.js';

const Topics = () => {
  return (
    <Box>
      <SectionFlag>Technology</SectionFlag>
      <SectionImageList data={topics} folder="/images/topics/" />
    </Box>
  );
};

export default Topics;
