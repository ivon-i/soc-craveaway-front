import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Image from 'next/image';

function MobileHero() {
  return (
    <Paper
      sx={{
        backgroundColor: '#34393C',
        marginTop: {
          xs: '32px',
          sm: '40px',
        },
        position: 'relative',
        borderRadius: '16px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          padding: '32px',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            color: '#fff',
            textAlign: 'center',
            maxWidth: '300px',
            lineHeight: '1.4',
          }}
        >
          Search & create healthy alternatives to fast food!
        </Typography>
      </Box>
    </Paper>
  );
}
export default MobileHero;
