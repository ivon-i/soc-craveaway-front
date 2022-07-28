import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';

export default function RecipeCardText() {
  return (
    <>
    <Typography>Description</Typography>
        <Box
      sx={{
        width: 300,
         height: 300,
          border: 1,
          borderRadius: 10,
          borderColor: "#D3D3D3",
        backgroundColor: '#ffffff',
        '&:hover': {
          backgroundColor: '#D3D3D3',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
    <Typography>Instructions</Typography>
        <Box
      sx={{
        width: 300,
          height: 300,
          border: 1,
          borderRadius: 10,
          borderColor: "#D3D3D3",
        backgroundColor: '#ffffff',
        '&:hover': {
          backgroundColor: '#D3D3D3',
          opacity: [0.9, 0.8, 0.7],
        },
        }}
    
    />
      <Typography>Creator:</Typography>
          <AccountCircleIcon />
        <Typography>Man Like Rafa</Typography>
        <Typography>Rate this recipe:</Typography>
      <Stack spacing={1}>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      </Stack>
    </>
  );
}
