import React from 'react';

import Box from '@mui/material/Box';

import SectionFlag from 'common/SectionFlag';
import SectionTitle from 'common/SectionTitle';
import SectionSubTitle from 'common/SectionSubTitle';
import SectionButtonList from 'common/SectionButtonList';
import SectionImageList from 'common/SectionImageList';

import { programs, images } from './data.js';

const Test = () => {
  return (
    <Box>
      <SectionFlag>Multi Disciplinary</SectionFlag>
      <SectionTitle>Cross Program Collaboration</SectionTitle>
      <SectionSubTitle>10+ programs contributing to BrickMMO:</SectionSubTitle>
      <SectionButtonList data={programs} />
      <SectionImageList data={images} />
    </Box>
  );
};

export default Test;
