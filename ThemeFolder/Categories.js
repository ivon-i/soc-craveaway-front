import { Box, Chip } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const Categories = ({ filterCategoryRecipe }) => {
  const categories = [
    {
      name: 'Pizza',
      emoji: '🍕',
    },
    {
      name: 'Burgers',
      emoji: '🍔 ',
    },
    {
      name: 'Pasta',
      emoji: '🍝',
    },
    {
      name: 'Fried',
      emoji: '🍗',
    },
    {
      name: 'BBQ',
      emoji: '🍖',
    },
    {
      name: 'Desserts',
      emoji: '🍰',
    },
    {
      name: 'Drinks',
      emoji: '🥤',
    },
  ];
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
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{
            overflowX: 'auto',
            // All the chips except for the last one
            '& > *:not(:last-child)': { marginRight: '16px' },
            // All the chips
            '& > div': {
              border: ' 0.75px solid rgba(114, 117, 118, 1)',
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
          {categories.map(({ name, emoji }) => {
            return (
              <Chip
                component="button"
                label={`${emoji} ${name}`}
                variant="outlined"
                sx={{
                  cursor: 'pointer',
                  borderRadius: '40px',
                  padding: '20px 8px',
                  fontSize: '16px',
                }}
                onClick={() => filterCategoryRecipe(name)}
              />
            );
          })}
        </Box>
      </Container>
    </>
  );
};
export default Categories;
