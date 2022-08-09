import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Image from 'next/image';

function MobileHero() {
  return (
    <Paper
      sx={{
        backgroundColor: '#34393C',
        marginTop: '32px',
        position: 'relative',
        borderRadius: '16px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            padding: '16px',
            alignSelf: 'center',
            // backgroundColor: 'red',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: '#fff',
              textAlign: 'center',
              lineHeight: '1.4',
              padding: '16px',
            }}
          >
            Search & create healthy alternatives to fast food!
          </Typography>
        </Box>
        <Box
          sx={{
            '& > img': {
              position: 'absolute',
              bottom: 0,
              right: 0,
              // height: '50%',
              // width: '20%',
              display: 'block',
              // objectFit: 'cover',
              // objectPosition: 'top left',
            },
          }}
        >
          {/* <Image src={'/foods.png'} width="200px" height="200px" /> */}
        </Box>
      </Box>
    </Paper>
  );
}
export default MobileHero;
