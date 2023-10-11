import React from 'react';

import Box from '@mui/material/Box';

import SectionFlag from 'common/SectionFlag';
import SectionTitle from 'common/SectionTitle';
import SectionSubTitle from 'common/SectionSubTitle';
import SectionImage from 'common/SectionImage';
import SectionList from 'common/SectionList';

import { concepts } from './data.js';

const Reason = () => {
  return (
    <Box>
      <SectionFlag>For Education</SectionFlag>
      <SectionImage src="/images/map.png" />
      <SectionTitle>
        BrickMMO was Developed out of a Desire to Teach Code Differently
      </SectionTitle>
      <SectionSubTitle>
        Providing students with a real world sandbox to apply:
      </SectionSubTitle>

      <SectionList data={concepts} />
    </Box>
  );
};

export default Reason;
