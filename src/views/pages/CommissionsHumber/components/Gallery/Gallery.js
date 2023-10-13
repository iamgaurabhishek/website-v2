import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Gallery = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: 'images/commissions/humber-original.png',
      rows: 1,
      cols: 1,
    },
    {
      src: 'images/commissions/humber-pixels.png',
      rows: 1,
      cols: 1,
    },
    {
      src: 'images/commissions/humber-place.png',
      rows: 2,
      cols: 2,
    },
    {
      src: 'images/commissions/humber-specs.png',
      rows: 1,
      cols: 1,
    },
    {
      src: 'images/commissions/humber-greeble.png',
      rows: 1,
      cols: 1,
    },
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length - 1);

  return (
    <Box>
      <ImageList
        variant="quilted"
        cols={4}
        rowHeight={isMd ? 300 : 220}
        gap={isMd ? 16 : 8}
      >
        {photosToShow.map((item, i) => (
          <ImageListItem
            key={i}
            cols={isMd ? item.cols || 1 : 2}
            rows={isMd ? item.rows || 1 : 1}
          >
            <img
              height={'100%'}
              width={'100%'}
              src={item.src}
              alt="..."
              loading="lazy"
              style={{
                objectFit: 'cover',
                cursor: 'poiner',
                borderRadius: 4,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Gallery;
