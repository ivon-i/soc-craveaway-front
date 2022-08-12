import { Box } from '@mui/system';
import React from 'react';
import Image from 'next/image';

function MobileHero() {
  return (
    <Box
      sx={{
        marginTop: {
          xs: '24px',
          sm: '32px',
        },
        position: 'relative',
        borderRadius: '16px',
        height: '170px',
      }}
    >
      <Image src="/goodFood.svg" layout="fill" objectFit="contain" />
    </Box>
  );
}
export default MobileHero;
