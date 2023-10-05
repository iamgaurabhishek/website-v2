/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import SectionFlag from 'common/SectionFlag';
import SectionTitle from 'common/SectionTitle';
import SectionSubTitle from 'common/SectionSubTitle';
import SectionImageList from 'common/SectionImageList';

import { partners } from './data.js';

const Partnership = () => {
  return (
    <Box>
      <SectionFlag>PARTNERSHIP</SectionFlag>
      <SectionTitle>BrickMMO is a Collaborative Project</SectionTitle>
      <SectionSubTitle>
        BrickMMO is an ongoing collaboration between{' '}
        <Link href="https://codeadam.ca" underline="none">
          CodeAdam
        </Link>
        ,{' '}
        <Link href="https://codeadam.ca" underline="none">
          Humber College
        </Link>
        , and{' '}
        <Link href="https://codeadam.ca" underline="none">
          BrevisRefero
        </Link>
        .
      </SectionSubTitle>

      <SectionImageList data={partners} />
    </Box>
  );
};

export default Partnership;
