import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
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
    <Box id="rules">
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
              subtitle: (
                <Box>
                  <Typography component="p" marginBottom={1}>
                    LEGO® does not make cameras, but they are crucial to many
                    BrickMMO systems including{' '}
                    <Link href="/systems-gps" underline="none">
                      GPS
                    </Link>
                    ,{' '}
                    <Link href="/systems-gps" underline="none">
                      Streetview
                    </Link>
                    ,{' '}
                    <Link href="/systems-gps" underline="none">
                      Places
                    </Link>
                    , and more.
                  </Typography>
                  <Typography component="p">
                    BrickMMO uses the{' '}
                    <Link href="https://pixycam.com/pixy2/" underline="none">
                      Pixy2
                    </Link>{' '}
                    robot vision sensor. This sensor comes available with a
                    pre-installed firmware that speaks the LEGO® sensor protocol
                    and a MINDSTORMS® compatiable RJ12 cable
                  </Typography>
                </Box>
              ),
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
