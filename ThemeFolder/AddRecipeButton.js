import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
function AddRecipeButton(props) {
  return (
    <Button
      variant="contained"
      size="large"
      startIcon={<AddIcon />}
      sx={{
        ...props.sx,
        fontWeight: '600',
      }}
    >
      Create Recipe
    </Button>
  );
}
export default AddRecipeButton;
