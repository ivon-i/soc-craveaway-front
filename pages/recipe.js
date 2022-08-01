import { Typography, Chip, Stack, Select, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import GradeIcon from '@mui/icons-material/Grade';
import Rating from '@mui/material/Rating';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';
import { useState } from 'react';

export default function Test() {
  const [value, setValue] = useState(5);

  return (
    <Box ml="15px">
      <Typography mt="30px" fontWeight={700}>
        Grilled Chicken and Broc
      </Typography>
      <Box width="340px" height="200px" backgroundColor="grey" mt="20px">
        IMAGE GOES HERE
      </Box>
      <Stack direction="column">
        <Chip
          label="4.5"
          icon={<GradeIcon />}
          variant="outlined"
          size="small"
          sx={{ mt: 2, border: 'none', width: '60px' }}
        />
        <Chip
          label="20min"
          icon={<AccessTimeIcon />}
          variant="outlined"
          size="small"
          sx={{ mt: 2, border: 'none', width: '60px', ml: '4px' }}
        />
        <Chip
          label="2"
          icon={<PeopleIcon />}
          variant="outlined"
          size="small"
          sx={{ mt: 2, border: 'none', width: '60px' }}
        />
        <Chip
          label="£5"
          icon={<PaymentIcon />}
          variant="outlined"
          size="small"
          sx={{ mt: 2, border: 'none', width: '60px' }}
        />
      </Stack>
      <Typography fontWeight={700} mt="20px">
        Ingredients
      </Typography>
      <Chip
        label="Chicken"
        variant="outlined"
        sx={{
          borderColor: '#FCC62E',
          borderWidth: '1.5px',
          mt: '10px',
        }}
      ></Chip>
      <Typography fontWeight={700} mt="20px">
        Description
      </Typography>
      <Typography
        sx={{
          borderRadius: '8px',
          width: ' 80%',
          display: 'inline-block',
          whiteSpace: 'pre-line',
        }}
        variant="outlined"
        placeholder="Add Description"
        mt="20px"
      >
        This salmon salad recipe makes a main dish salad with chopped
        vegetables, flaky fish, and tangy citrus dressing. It has plenty of
        protein and healthy fats, so it’s nutritious and delicious!{' '}
      </Typography>
      <Typography mt="20px">Creator</Typography>
      <Rating name="read-only" value={value} />
    </Box>
  );
}
