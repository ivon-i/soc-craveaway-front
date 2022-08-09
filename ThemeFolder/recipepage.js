import {
  Typography,
  Chip,
  Stack,
  Select,
  MenuItem,
  Button,
  Container,
  Paper,
  Grid,
} from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import GradeIcon from '@mui/icons-material/Grade';
import Rating from '@mui/material/Rating';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';
import { useState, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function RecipeCards({ recipedata, separatedingredients }) {
  const [value, setValue] = useState(0);
  async function handleClick(id) {
    try {
      const patch = await fetch(
        `https://craveaway.herokuapp.com/recipes/${id}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ rating: value }),
        }
      );
      const res = await patch.json();
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <Container
      maxWidth="sm"
      component={Paper}
      sx={{
        marginTop: '40px',
        padding: '24px 24px 40px 24px',
        borderRadius: '8px',
        direction: 'row',
        // backgroundColor: '#FEF9EB',
      }}
    >
      {recipedata.map((item) => (
        <Box>
          <Typography
            component="h1"
            variant="h2"
            sx={{ fontWeight: '700', fontSize: '39px' }}
          >
            {item.title}
          </Typography>
          <Box
            height="240px"
            backgroundColor="#34393C"
            mt="20px"
            borderRadius="8px"
            postion="relative"
            overflow="hidden"
          >
            <img src={item.image_url} layout="fill" objectFit="contain" />
          </Box>
          <Grid container maxWidth="xl">
            <Grid item xs={3}>
              <Chip
                label={item.rating}
                // PUT AVARAGE INSTEAD OF RATING
                icon={<GradeIcon />}
                variant="outlined"
                size="small"
                sx={{
                  display: 'flex',
                  justifyContent: 'left',
                  mt: 2,
                  border: 'none',
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Chip
                label={item.time}
                icon={<AccessTimeIcon />}
                variant="outlined"
                size="small"
                sx={{
                  display: 'flex',
                  justifyContent: 'left',
                  mt: 2,
                  border: 'none',
                  ml: '4px',
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Chip
                label="2"
                icon={<PeopleIcon />}
                variant="outlined"
                size="small"
                sx={{
                  mt: 2,
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'left',
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Chip
                label="£5 (pp)"
                icon={<PaymentIcon />}
                variant="outlined"
                size="small"
                sx={{
                  mt: 2,
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'left',
                }}
              />
            </Grid>
          </Grid>
          ​{/* INGREDIENTS */}
          <Typography fontWeight={700} mt="32px">
            Ingredients
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            {separatedingredients.map((item) => (
              <Chip
                label={item}
                variant="outlined"
                sx={{
                  borderColor: '#FCC62E',
                  borderWidth: '1.5px',
                  mt: '8px',
                  mb: '32px',
                }}
              ></Chip>
            ))}
          </Box>
          {/* DESCRIPTION */}
          <Typography fontWeight={700} mt="24px">
            Description
          </Typography>
          <Typography
            sx={{
              borderRadius: '8px',
              display: 'inline-block',
              whiteSpace: 'pre-line',
            }}
            variant="outlined"
            placeholder="Add Description"
            mt="8px"
          >
            {item.description}
          </Typography>
          {/* RATING */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '16px',
              marginTop: '32px',
            }}
          >
            <Typography sx={{ fontWeight: '700' }}>
              Rate this recipe:{' '}
            </Typography>
            <Rating
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              value={value}
            />
            <Button
              variant="contained"
              onClick={() => {
                handleClick(item.recipe_id);
              }}
            >
              Submit Rating
            </Button>
          </Box>
          {/* CREATOR */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '16px',
              marginTop: '32px',
            }}
          >
            <Typography sx={{ fontWeight: '700' }}>Creator:</Typography>
            <AccountCircleIcon />
            <Typography sx={{ margin: '-8px' }}> {item.author}</Typography>
          </Box>
        </Box>
      ))}
    </Container>
  );
}
