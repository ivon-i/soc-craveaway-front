import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export default function RecipeCardIngredients() {
    return (
      <>
        <Typography>Ingredients</Typography>
        <Stack direction="column" spacing={1}
        sx={{ maxWidth: 345, alignItems: 'center', display: "flex", justifyItems: "flex-start" }}>
          <Chip label="Chicken 500g" />
          <Chip label="Broccoli 1000g" />
          <Chip label="Rice 5000g" />
        </Stack>
      </>
    );
}
