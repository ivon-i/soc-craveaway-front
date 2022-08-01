import { Typography, Chip, Stack } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import GradeIcon from '@mui/icons-material/Grade';
import Rating from '@mui/material/Rating';
import { useState } from 'react';

export default function Test() {
  const [value, setValue] = useState(4);
  return (
    <div>
      <Typography> Grilled Chicken and Broc</Typography>
      <Box width="200px" height="200px" backgroundColor="grey">
        IMAGE GOES HERE
      </Box>
      <Stack direction="column">
        <Chip
          label="4.5"
          icon={<GradeIcon />}
          variant="outlined"
          size="small"
          sx={{ mt: 2, border: 'none' }}
        />
        <Chip
          label="4.5"
          icon={<GradeIcon />}
          variant="outlined"
          size="small"
          sx={{ mt: 2, border: 'none' }}
        />
        <Chip
          label="4.5"
          icon={<GradeIcon />}
          variant="outlined"
          size="small"
          sx={{ mt: 2, border: 'none' }}
        />
      </Stack>
      <Typography>Ingredients</Typography>
      <Chip
        label="dadadadad"
        variant="filled"
        sx={{
          color: 'white',
          backgroundColor: '#000080',
        }}
      ></Chip>
      <Typography>Description</Typography>
      <Typography
        sx={{ borderRadius: '8px', width: ' 80%', ml: '30px' }}
        variant="outlined"
        // onChange={AddIngredients}
        placeholder="Add Description"
        rows={5}
      >
        {' '}
        This salmon salad recipe makes a main dish salad with chopped
        vegetables, flaky fish, and tangy citrus dressing. It has plenty of
        protein and healthy fats, so it’s nutritious and delicious!{' '}
      </Typography>
      <Typography>Creator</Typography>
      <Rating name="read-only" value={value} />
    </div>
  );
}
