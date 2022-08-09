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
        sx={{
          ...props.sx,
          fontWeight: '600',
          borderRadius: '40px',
          padding: '8px 24px',
        }}
      >
        {props.icon}
        {props.text}
      </Button>
    </Link>
  );
}
export default AddRecipeButton;
