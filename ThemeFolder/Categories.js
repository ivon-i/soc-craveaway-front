import { Box, Chip, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
const Categories = () => {
  // handles the chip if clicked on: the chip could be a quicklink or a filter for results
  function handleChip() {
    console.log('Categories Component ChipClicked');
  }
  return (
    <>
      <Container
        sx={{
          marginTop: {
            xs: '32px',
            sm: '80px',
            md: '88px',
          },
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '',
        }}
        maxWidth="lg"
      >
        {/* Using Box instead of grid because grid with spacing can cause overlapping issues. */}
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{
            overflowX: 'auto',
            // All the chips except for the last one
            '& > *:not(:last-child)': { marginRight: '16px' },
            // All the chips
            '& > div': {
              border: 1,
              padding: {
                xs: '16px 16px',
                sm: '16px 8px',
                md: '16 px 16px',
              },
              fontSize: '16px',
              borderRadius: '40px',
            },
          }}
        >
          <Chip label="🍕 Pizza" variant="outlined" onClick={handleChip} />
          <Chip label="🍔 Burgers" variant="outlined" onClick={handleChip} />
          <Chip label="🥡 Chinese" variant="outlined" onClick={handleChip} />
          <Chip label="🍗 Fried" variant="outlined" onClick={handleChip} />
          <Chip label="🍖 BBQ" variant="outlined" onClick={handleChip} />
          <Chip label="🍰 Desserts" variant="outlined" onClick={handleChip} />
          <Chip label="🥤 Drinks" variant="outlined" onClick={handleChip} />
          <Chip label="🥓 Greasy" variant="outlined" onClick={handleChip} />
        </Box>
      </Container>
    </>
  );
};
export default Categories;
