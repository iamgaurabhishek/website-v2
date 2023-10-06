import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import SectionFlag from 'common/SectionFlag';
import SectionTitle from 'common/SectionTitle';

import { faqs } from './data.js';

const ExceptionGroupItem = ({ items }) => {
  return (
    <Box>
      {items.map((item, i) => (
        <Box
          component={Accordion}
          key={i}
          padding={1}
          marginBottom={i === item.length - 1 ? 0 : 2}
          borderRadius={2}
          sx={{
            '&::before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id={`panel1a-header--${i}`}
          >
            <Typography fontWeight={600}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">{item.subtitle}</Typography>
          </AccordionDetails>
        </Box>
      ))}
    </Box>
  );
};

ExceptionGroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const Rules = () => {
  return (
    <Box id="rules">
      <Box marginBottom={4}>
        <SectionFlag>Rules and Exceptions</SectionFlag>
        <SectionTitle>Rules of BrickMMO</SectionTitle>
        <Typography
          component="p"
          color="textSecondary"
          align="center"
          marginBottom={2}
        >
          Unless absolutely impossible, everything in BrickMMO is built with
          100% LEGO® bricks. Each decision to integrate a non LEGO® brand
          component was made with great difficulty!
        </Typography>
        <Typography component="p" color="textSecondary" align="center">
          The following are the only non LEGO® brand components permitted:
        </Typography>
      </Box>

      <ExceptionGroupItem items={faqs} />
    </Box>
  );
};

export default Rules;
