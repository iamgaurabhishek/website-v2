import React from 'react';

import Box from '@mui/material/Box';

import SectionImageList from 'common/SectionImageList';

import { links } from './data.js';

const Links = () => {
  return (
    <Box>
      <SectionImageList data={links} folder="/images/topics/" />
    </Box>
  );
};

export default Links;
