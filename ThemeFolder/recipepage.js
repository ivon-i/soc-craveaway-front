import {
  Typography,
  Chip,
  Button,
  Container,
  Paper,
  Grid,
} from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import GradeIcon from '@mui/icons-material/Grade';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import { useUser } from '@auth0/nextjs-auth0';

export default function RecipeCards({ recipedata, separatedingredients }) {
  const [value, setValue] = useState(0);
  const [ingredientAlert, setIngredientAlert] = useState('');
  const { user } = useUser();

  // This function receives the id of the recipecard and allows the user to rate it.
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
    } catch (error) {
      console.log(error.message);
    }
  }

  // This function allows the user to add an ingredient to their shopping list. It posts the user's username and ingredient so it can later on appear on the profile page
  // for that user.
  const getChipInfo = async (e) => {
    setIngredientAlert(
      `Added ${e.currentTarget.innerText} to your ShoppingList`
    );
    setTimeout(reset_animation, 100);
    const response = await fetch('https://craveaway.herokuapp.com/shop/list', {
      method: 'POST',
      body: JSON.stringify({
        username: user.name,
        item: e.currentTarget.innerText,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    console.log(ingredientAlert);
  };
  function reset_animation() {
    let el = document.getElementById('fdsss');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null;
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
        backgroundColor: '#FBFBFB',
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
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '16px',
              marginTop: '32px',
              marginBottom: '-8px',
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: '600', fontSize: '14px' }}
            >
              Creator:
            </Typography>
            <AccountCircleIcon sx={{ width: '16px', height: '16px' }} />
            <Typography sx={{ margin: '-8px', fontSize: '14px' }}>
              {' '}
              {item.author}
            </Typography>
          </Box>
          <Box
            height="240px"
            backgroundColor="#34393C"
            mt="20px"
            borderRadius="8px"
            position="relative"
            overflow="hidden"
          >
            <Image src={item.image_url} layout="fill" objectFit="cover" />
            <Chip
              color="success"
              label={item.nutrition}
              sx={{
                zIndex: 100,
                position: 'absolute',
                top: '16px',
                right: '16px',
              }}
            />
          </Box>
          <Grid container maxWidth="xl" sx={{ alignSelf: 'right' }}>
            <Grid item xs={3}>
              <Chip
                label={`${item.rating} ${'Stars'}`}
                icon={
                  <GradeIcon
                    style={{
                      color: '#FCC62E',
                      backgroundColor: '#34393C',
                      padding: '4px',
                      borderRadius: '20px',
                    }}
                  />
                }
                variant="outlined"
                size="large"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 2,
                  border: 'none',
                  opacity: '90%',
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Chip
                label={`${item.time}`}
                icon={
                  <AccessTimeIcon
                    style={{
                      color: '#FCC62E',
                      backgroundColor: '#34393C',
                      padding: '4px',
                      borderRadius: '20px',
                    }}
                  />
                }
                variant="outlined"
                size="large"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 2,
                  border: 'none',
                  ml: '4px',
                  opacity: '90%',
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Chip
                label={`${item.serves} Servings`}
                icon={
                  <PeopleIcon
                    style={{
                      color: '#FCC62E',
                      backgroundColor: '#34393C',
                      padding: '4px',
                      borderRadius: '20px',
                    }}
                  />
                }
                variant="outlined"
                size="large"
                sx={{
                  mt: 2,
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'center',
                  opacity: '90%',
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Chip
                label={`${item.cost}`}
                icon={
                  <PaymentIcon
                    style={{
                      color: '#FCC62E',
                      backgroundColor: '#34393C',
                      padding: '4px',
                      borderRadius: '20px',
                    }}
                  />
                }
                variant="outlined"
                size="large"
                sx={{
                  mt: 2,
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'center',
                  opacity: '90%',
                }}
              />
            </Grid>
          </Grid>{' '}
          {/* INGREDIENTS */}
          <Typography
            variant="h4"
            mt="40px"
            mb="16px"
            fontWeight={600}
            fontSize={'20px'}
          >
            Ingredients
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ justifyContent: 'space-inbetween' }}
          >
            {separatedingredients.map((item) => (
              <Grid item>
                <Chip
                  label={item}
                  variant="outlined"
                  sx={{
                    borderColor: '#FCC62E',
                    borderWidth: '1.5px',
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 8px',
                    borderRadius: '40px',
                    fontSize: '14px',
                  }}
                  onClick={getChipInfo}
                  deleteIcon={<AddIcon />}
                ></Chip>
              </Grid>
            ))}
          </Grid>
          {ingredientAlert.length > 0 && (
            <Typography mt="10px" id="fdsss">
              {ingredientAlert}
            </Typography>
          )}
          {/* DESCRIPTION */}
          <Typography
            variant="h6"
            sx={{ fontWeight: '600', fontSize: '20px', marginTop: '32px' }}
          >
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
              flexDirection: 'column',
              alignItems: 'left',
              gap: '16px',
              marginTop: '32px',
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: '600', fontSize: '20px' }}
            >
              Rate this recipe:{' '}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexdirection: 'column',
                alignItems: 'center',
              }}
            >
              <Rating
                size="large"
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                value={value}
              />
            </Box>
          </Box>
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: '40px',
              marginTop: '40px',
              width: {
                xs: '100%',
                md: 'auto',
              },
            }}
            onClick={() => {
              handleClick(item.recipe_id);
            }}
          >
            <SendIcon sx={{ width: '16px', height: '16px', opacity: '75%' }} />
            <Typography
              sx={{
                fontWeight: '600',
                marginLeft: '8px',
                textTransform: 'none',
              }}
            >
              Submit rating
            </Typography>
          </Button>
        </Box>
      ))}
    </Container>
  );
}
