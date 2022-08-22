import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import {
  Typography,
  Chip,
  Paper,
  Container,
  Grid,
  Button,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import Cards from '../components/Cards.js';
import { Navbar } from '../components/navbar.js';

export default function Profile() {
  const { user, error, isLoading } = useUser();
  const [list2, setList2] = useState([]);
  const [chipData, setChipData] = useState([]);
  const [favCard, setFavCard] = useState([]);
  const [state, setState] = useState(false);
  const [shopEmp, setShopEmp] = useState(false);
  const [userName, setUserName] = useState('');

  // This function fetches ingredients based on a users profile. It will run everytime 'state' changes.
  useEffect(() => {
    async function fetchShoppingList() {
      if (user) {
        const response = await fetch(
          `https://craveaway.herokuapp.com/shop?username=${user.name}`
        );
        const data = await response.json();
        const { payload } = data;
        setChipData(payload);
        console.log(userName);
      }
    }

    // This function gets the recipes of the user for their profile.
    async function fetchFavouritedRecipes() {
      const response = await fetch(
        `https://craveaway.herokuapp.com/fav?userName=${user.name}`
      );
      const data = await response.json();
      const { payload } = data;
      setFavCard(payload);
      console.log('favCard', favCard);
    }
    try {
      fetchShoppingList();
      fetchFavouritedRecipes();
    } catch (error) {
      console.log(error.message);
    }
  }, [state]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const handleClick = (e) => {
    console.info(e.currentTarget.innerText);
  };

  // This function deletes an ingredient in the users shopping list by the ingredient id
  const handleDeleteShopList = async (id) => {
    try {
      const response = await fetch(
        `https://craveaway.herokuapp.com/shop/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setState(!state);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (user) {
    return (
      <>
        <Box
          sx={{
            backgroundImage: 'url(/food_illustration.png)',
            minHeight: '100vh',
            paddingBottom: {
              xs: '0',
              sm: '40px',
              md: '40px',
            },
          }}
        >
          <Navbar />
          <Container
            maxWidth="md"
            sx={{ paddingBottom: '88px', marginTop: '40px' }}
          >
            <Paper sx={{ padding: '32px 0px' }}>
              <Box ml="15px">
                <Typography
                  variant="h4"
                  mt="50px"
                  sx={{
                    fontWeight: '700',
                    textAlign: 'center',
                  }}
                >
                  Profile
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={user.picture}
                    alt={user.name}
                    style={{
                      borderRadius: '100%',
                      width: '108px',
                      height: '108px',
                      marginBottom: '16px',
                      marginTop: '32px',
                    }}
                  />
                  <Typography variant="h5" fontWeight="600">
                    {user.name}
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '14px',
                    textAlign: 'center',
                    textDecoration: 'underline',
                    textTransform: 'capitalize',
                    mt: '8px',
                    opacity: '70%',
                  }}
                ></Typography>
                <Container
                  maxWidth="lg"
                  sx={{ backgroundColor: '', marginTop: '80px' }}
                >
                  <Typography
                    variant="h4"
                    mt="40px"
                    mb="16px"
                    fontWeight={600}
                    fontSize={'20px'}
                  >
                    Favourites
                  </Typography>
                </Container>
                <Container maxWidth="lg" sx={{ mb: 10 }}>
                  <Box
                    sx={{
                      display: { sm: 'grid', xs: 'flex' },
                      gap: '20px',
                      alignItems: 'flex-start',
                      flexWrap: {
                        xs: 'nowrap',
                      },
                      gridTemplateColumns: {
                        sm: 'repeat(auto-fill, minmax(250px, 1fr))',
                      },
                      '& > div': {
                        marginBottom: '24px',
                        minWidth: '250px',
                        borderRadius: '16px',
                      },
                      overflowX: 'auto',
                    }}
                  >
                    {favCard.length > 0
                      ? favCard.map((item) => {
                          console.log(item);
                          return <Cards item={item} />;
                        })
                      : ''}
                  </Box>
                </Container>
                <Container maxWidth="lg">
                  <Typography
                    variant="h4"
                    mt="40px"
                    mb="16px"
                    fontWeight={600}
                    fontSize={'20px'}
                  >
                    Shopping List
                  </Typography>
                </Container>
                {list2.length === 4
                  ? setShopEmp(true) && (
                      <Typography fontWeight={700}>Add smt</Typography>
                    )
                  : null}
                <Grid
                  container
                  spacing={2}
                  sx={{ padding: '16px', justifyContent: 'space-between' }}
                >
                  {chipData.map((item) => (
                    <Grid item>
                      <Chip
                        key={item.item_id}
                        variant="outlined"
                        label={item.item}
                        onClick={handleClick}
                        onDelete={() => handleDeleteShopList(item.item_id)}
                        sx={{
                          borderColor: '#FCC62E',
                          borderWidth: '1.5px',
                          display: 'flex',
                          width: '100%',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingTop: '16px',
                          paddingBottom: '16px',
                          padding: '24px 8px',
                          borderRadius: '40px',
                          fontSize: '14px',
                        }}
                      ></Chip>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </Container>
        </Box>
      </>
    );
  } else {
    return (
      <>
        {
          <>
            <Navbar />
            <Box
              sx={{
                backgroundImage: 'url(/food_illustration.png)',
                minHeight: '100vh',
              }}
            >
              <Container maxWidth="xs" sx={{ paddingTop: '40px' }}>
                <Paper
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    overflow: 'hidden',
                    padding: '40px 40px',
                  }}
                >
                  <Typography
                    font-align="center"
                    sx={{
                      fontWeight: '700',
                      fontSize: 16,
                    }}
                  >
                    You must login to access your profile!
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      className="fryingpan"
                      alt="Loading..."
                      width="400"
                      height="250"
                      margin="auto"
                      data-id="14475354"
                      data-animated-url="https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif"
                      skip_resize="true"
                      srcset="https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 320w,
            https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 400w,
            https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 450w,
            https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 640w,
            https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 700w,
            https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 800w,
            https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 840w,
            https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 1000w,
            https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 1200w,
            https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 768w,
            https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 1600w"
                      sizes="(max-width: 919px) 100vw, max(768px, 98vh)"
                      src="https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif"
                    />
                  </Box>

                  <Link href="/api/auth/login" passHref>
                    <Button
                      size="large"
                      aria-label="Login"
                      variant="contained"
                      className="fixedLoginButton"
                      sx={{
                        fontWeight: '600',
                        textTransform: 'capitalize',
                        borderRadius: '40px',
                        marginTop: '24px',
                      }}
                    >
                      Login
                    </Button>
                  </Link>
                </Paper>
              </Container>
            </Box>
          </>
        }
      </>
    );
  }
}
