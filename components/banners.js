import * as React from 'react';
import { Paper, Stack, List, Button } from '@mui/material';
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
      {/* <Paper style={{ maxWidth: 300, overflow: 'auto' }} >
   
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Paper> */}
    </div>
  );
}
