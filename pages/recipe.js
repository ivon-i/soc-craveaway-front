import {
  Typography,
  Chip,
  Stack,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import GradeIcon from '@mui/icons-material/Grade';
import Rating from '@mui/material/Rating';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';
import { useState, useEffect } from 'react';

export default function RecipeCards({ recipedata, separatedingredients }) {
  const [value, setValue] = useState(0);

  async function handleClick() {
    try {
      const patch = await fetch(`https://craveaway.herokuapp.com/recipes/18`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating: value }),
      });
      const res = await patch.json();
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      {recipedata.map((item) => (
        <Box ml="15px">
          <Typography mt="30px" fontWeight={700}>
            {item.title}
          </Typography>
          <Box width="340px" height="200px" backgroundColor="grey" mt="20px">
            IMAGE GOES HERE
          </Box>
          <Stack direction="column">
            <Chip
              label={item.rating}
              // PUT AVARAGE INSTEAD OF RATING
              icon={<GradeIcon />}
              variant="outlined"
              size="small"
              sx={{ mt: 2, border: 'none', width: '80px' }}
            />
            <Chip
              label={item.time}
              icon={<AccessTimeIcon />}
              variant="outlined"
              size="small"
              sx={{ mt: 2, border: 'none', width: '80px', ml: '4px' }}
            />
            <Chip
              label="2"
              icon={<PeopleIcon />}
              variant="outlined"
              size="small"
              sx={{ mt: 2, border: 'none', width: '80px' }}
            />
            <Chip
              label="£5"
              icon={<PaymentIcon />}
              variant="outlined"
              size="small"
              sx={{ mt: 2, border: 'none', width: '80px' }}
            />
          </Stack>
          <Typography fontWeight={700} mt="20px">
            Ingredients
          </Typography>
          {separatedingredients.map((item) => (
            <Chip
              label={item}
              variant="outlined"
              sx={{
                borderColor: '#FCC62E',
                borderWidth: '1.5px',
                mt: '10px',
              }}
            ></Chip>
          ))}
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
            {item.description}
          </Typography>
          <Typography mt="20px">Creator</Typography>
          <Rating
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            value={value}
          />
        </Box>
      ))}
      <Button onClick={handleClick}>Submit Rating</Button>
    </div>
  );
}
