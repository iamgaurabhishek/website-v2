import React from 'react';

import Box from '@mui/material/Box';

import SectionFlag from 'common/SectionFlag';
import SectionTitle from 'common/SectionTitle';
import SectionSubTitle from 'common/SectionSubTitle';
import SectionList from 'common/SectionList';

import { concepts } from './data.js';

const Benefits = () => {
  return (
    <Box>
      <SectionFlag>Sponsorship Benefits</SectionFlag>
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

export default Benefits;
