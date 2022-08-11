import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Typography, Chip, Stack, Paper } from '@mui/material';
import RecCard from '../components/recCard';
import data from '../db/recipeData.js';
import { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import Cards from '../ThemeFolder/Cards';
import { Navbar } from '../ThemeFolder/Navbar';
import { Container } from '@mui/material';
import { Image } from 'next/image';
import { Grid } from '@mui/material';

import { Button } from '@mui/material';

export default function Profile() {
  const { user, error, isLoading } = useUser();
  const [list2, setList2] = useState([]);
  const [chipData, setChipData] = useState([]);
  const [favCard, setFavCard] = useState([]);
  const [state, setState] = useState(false);
  const [shopEmp, setShopEmp] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://craveaway.herokuapp.com/shop?username=Yoshi Natsu`
      );
      const data = await response.json();
      const { payload } = data;
      setChipData(payload);
    }
    async function fetchFavCards() {
      const response = await fetch(`https://craveaway.herokuapp.com/fav`);
      const data = await response.json();
      const { payload } = data;
      setFavCard(payload);
    }
    try {
      fetchData();
      fetchFavCards();
    } catch (error) {
      console.log(error.message);
    }
  }, [state]);

  const [list, setList] = useState([
    { id: 1, label: 'Clickable Deletable' },
    { id: 2, label: 'Clickable Deletable' },
    { id: 3, label: 'Clickable Deletable' },
    { id: 4, label: 'Clickable Deletable' },
    { id: 5, label: 'Clickable Deletable' },
    { id: 6, label: 'Clickable Deletable' },
    { id: 7, label: 'Clickable Deletable' },
    { id: 8, label: 'Clickable Deletable' },
    { id: 9, label: 'Clickable Deletable' },
    { id: 10, label: 'Clickable Deletable' },
    { id: 11, label: 'Clickable Deletable' },
    { id: 12, label: 'Clickable Deletable' },
    { id: 13, label: 'Clickable Deletable' },
  ]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  // // CHANGE THIS DATA TO BE THE CARD THAT YOU HAVE CLICKED , HEART
  // // BACKEND!!!
  // // HAVE A EMPTY TABLE, ONCE THE HEART IS CLICKED, POST REQUEST TO THIS TABLE, POPULATE THIS DATA WITH THAT TABLE'S DATA
  // // TO GET DATA, GET REQUEST FROM THAT TABLE
  const handleClick = (e) => {
    console.info(e.currentTarget.innerText);
  };
  const handleDeleteShopList = async (id) => {
    // const newList = list.filter((item) => item.id !== id);
    // setList(newList);
    try {
      const response = await fetch(
        `http://craveaway.herokuapp.com/shop/${id}`,
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
    console.log(id);
  };

  if (user) {
    return (
      <>
        <Navbar />
        <Container
          maxWidth="md"
          sx={{ marginBottom: '88px', marginTop: '40px' }}
        >
          <Paper sx={{ padding: '40px 0px' }}>
            <Box ml="15px">
              <Typography
                variant="h4"
                mt="50px"
                sx={{
                  fontWeight: '700',
                  textAlign: 'center',
                }}
              >
                {/* {user.name}'s  */}
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
              <Cards data={favCard} />
              {/* <Stack
              direction="column"
              spacing={2}
              mt="15px"
              sx={{
                maxWidth: 345,
                display: 'flex',
                alignContent: 'flex-start',
                flexWrap: 'wrap',
              }}
            > */}
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
              {/* {list.map((item) => (
            <Chip
              variant="outlined"
              label={item.label}
              onClick={handleClick}
              onDelete={() => handleDelete(item.id)}
              sx={{ borderColor: '#FCC62E', borderWidth: '1.5px' }}
            ></Chip>
          ))} */}
              <Grid container spacing={2} sx={{ padding: '16px' }}>
                {chipData.map((item) => (
                  <Grid item xs={6} sm={4} md={3}>
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
              {/* </Stack> */}
            </Box>
          </Paper>
        </Container>
      </>
    );
  } else {
    return (
      <>
        {
          <div>
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
              <Box
                sx={{
                  borderRadius: 7,
                  backgroundColor: 'white',
                  paddingBottom: 8,
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  width: 300,
                  height: 10,
                  m: 'auto',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: '900',
                    marginTop: 15,
                    marginLeft: 3,
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  You must login to access your profile!
                </Typography>
              </Box>
              <>
                {/* <LockOpenIcon sx={{
             fontSize:"120px",
            fontWeight:"1000",
              margin: 10,
            marginLeft:18,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}/> */}
                <Box
                  sx={{
                    backgroundColor: 'white',
                    display: 'fixed',
                    width: '43%',
                    m: 'auto',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    className="fryingpan"
                    alt="Loading..."
                    width="400"
                    height="250"
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
                  ></img>
                </Box>
              </>
              <Box
                sx={{
                  backgroundColor: 'white',
                  paddingBottom: 5,
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  width: '43%',
                  m: 'auto',
                }}
              >
                <Link href="/api/auth/login" passHref>
                  <Button
                    variant="contained"
                    className="fixedLoginButton"
                    sx={{
                      fontWeight: '900',
                      marginTop: 15,
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      width: '10%',
                      m: 'auto',
                    }}
                  >
                    Login
                  </Button>
                </Link>
              </Box>
            </Box>
          </div>
        }
      </>
    );
  }
}
