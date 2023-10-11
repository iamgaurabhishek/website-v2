/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import SectionFlag from 'common/SectionFlag';
import SectionTitle from 'common/SectionTitle';
import SectionSubTitle from 'common/SectionSubTitle';
import SectionImageList from 'common/SectionImageList';

import { grants } from './data.js';

const Grants = () => {
  return (
    <Box>
      <SectionFlag>Grants</SectionFlag>
      <SectionTitle>Research Funding</SectionTitle>
      <SectionSubTitle>
        BrickMMO has received funding from{' '}
        <Link to="https://humber.ca/research/sotl" component={LinkRouter}>
          Cultivate
        </Link>
        ,{' '}
        <Link to="https://codeadam.ca" component={LinkRouter}>
          Academic Plan Priority 3
        </Link>
        , and{' '}
        <Link to="https://codeadam.ca" component={LinkRouter}>
          Greenfield
        </Link>{' '}
        funds.
      </SectionSubTitle>

      <SectionImageList data={grants} />
    </Box>
  );
};

export default Grants;
