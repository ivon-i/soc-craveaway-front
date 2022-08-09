import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Typography, Chip, Stack } from '@mui/material';
import RecCard from '../components/recCard';
import data from '../db/recipeData.js';
import { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import Cards from '../ThemeFolder/Cards';
import { Button } from '@mui/material';

export default function Profile() {
  const { user, error, isLoading } = useUser();
  const [list2, setList2] = useState([]);
  const [chipData, setChipData] = useState([]);
  const [favCard, setFavCard] = useState([]);
  const [shopEmp, setShopEmp] = useState(false);
  // const [list, setList] = useState([
  //   { id: 1, label: 'Clickable Deletable' },
  //   { id: 2, label: 'Clickable Deletable' },
  //   { id: 3, label: 'Clickable Deletable' },
  //   { id: 4, label: 'Clickable Deletable' },
  //   { id: 5, label: 'Clickable Deletable' },
  // ]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://craveaway.herokuapp.com/shop?username=${user}`
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
  }, [chipData, favCard]);

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
    } catch (error) {
      console.log(error.message);
    }
    console.log(id);
  };

  if (user) {
    return (
      <Box ml="15px">
        <Typography variant="h4" mt="50px">
          {user.name}'s Profile
        </Typography>
        <Typography mt="30px" fontWeight={700}>
          Favourite
        </Typography>
        <Cards data={favCard} />
        <Stack
          direction="column"
          spacing={2}
          mt="15px"
          sx={{
            maxWidth: 345,
            display: 'flex',
            alignContent: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          <Typography fontWeight={700}>Shopping List</Typography>
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
          {chipData.map((item) => (
            <Chip
              key={item.item_id}
              variant="outlined"
              label={item.item}
              onClick={handleClick}
              onDelete={() => handleDeleteShopList(item.item_id)}
              sx={{ borderColor: '#FCC62E', borderWidth: '1.5px' }}
            ></Chip>
          ))}
        </Stack>
      </Box>
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
                  mt: 1,
                  backgroundColor: 'white',
                  paddingBottom: 10,
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  width: '43%',
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
