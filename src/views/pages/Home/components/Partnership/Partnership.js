/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import SectionFlag from 'common/SectionFlag';
import SectionTitle from 'common/SectionTitle';
import SectionSubTitle from 'common/SectionSubTitle';
import SectionImageList from 'common/SectionImageList';

import { partners } from './data.js';

const Partnership = () => {
  return (
    <Box>
      <SectionFlag>Partnership</SectionFlag>
      <SectionTitle>BrickMMO is a Collaborative Project</SectionTitle>
      <SectionSubTitle>
        BrickMMO is an ongoing collaboration between{' '}
        <Link to="https://codeadam.ca" component={LinkRouter}>
          CodeAdam
        </Link>
        ,{' '}
        <Link to="https://codeadam.ca" component={LinkRouter}>
          Humber College
        </Link>
        , and{' '}
        <Link to="https://codeadam.ca" component={LinkRouter}>
          BrevisRefero
        </Link>
        .
      </SectionSubTitle>

      <SectionImageList data={partners} />
    </Box>
  );
};

export default Partnership;
