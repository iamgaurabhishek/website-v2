import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        >
          Rules and Exceptions
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
          Rules of BrickMMO
        </Box>
        <Typography component={'p'} color={'textSecondary'} align={'center'}>
          Unless absolutely impossible, everything in BrickMMO is built with
          100% LEGO® bricks.
          <br />
          Each decision to integrate a non LEGO® brand component was made with
          great difficulty!
        </Typography>
      </Box>

      <Box>
        <ExceptionGroupItem
          items={[
            {
              title: 'Cameras',
              subtitle:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            },
            {
              title: 'Electrcity',
              subtitle:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            },
            {
              title: 'Cables',
              subtitle:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Rules;
