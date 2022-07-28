import * as React from 'react';
import { Paper, Stack, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: 'solid',
  borderWidth: '1.5px',
}));

export default function Banners() {
  return (
    <div>
      <Stack
        id="stack"
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        mt="20px"
        sx={{ maxWidth: 375, overflow: 'auto', height: 50 }}
        alignItems="center"
      >
        <Item>Pizza</Item>
        <Item>Later</Item>
        <Item>Hamb</Item>
        <Item>Halal</Item>
        <Item>Halal</Item>
        <Item>Halal</Item>
        <Item>Halal</Item>
        <Item>Halal</Item>
      </Stack>
      <Box
        sx={{
          borderStyle: 'solid',
          borderRadius: 3,
          mt: '20px',
          mr: '5px',
          ml: '5px',
          p: '10px',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          height: '112px',
        }}
      >
        <p>Recipes that are good for you</p>
      </Box>
    </div>
  );
}
