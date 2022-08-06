import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
function AddRecipeButton(props) {
  return (
    <Link href="/createrecipe">
      <Button
        variant="contained"
        size="large"
        startIcon={<AddIcon />}
        sx={{
          ...props.sx,
          fontWeight: '600',
        }}
      >
        {props.text}
      </Button>
    </Link>
  );
}
export default AddRecipeButton;
