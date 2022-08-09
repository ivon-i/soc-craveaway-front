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
        <Box sx={{ padding: '16px', alignSelf: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: '#fff' }}>
            Choose the healthy alternative to fast food
          </Typography>
        </Box>
        <Box
          sx={{
            overflow: 'hidden',
            //
            border: '1px solid red',
            '& > img': {
              postion: 'absolute',
              bottom: 0,
              right: 0,
              height: '100%',
              width: '200px',
            },
          }}
        >
          <img
            src={'/MobileHero.png'}

            // objectFit="contain"
          />
        </Box>
      </Box>
    </Paper>
  );
}
export default MobileHero;
