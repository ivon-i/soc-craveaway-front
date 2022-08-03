import Head from 'next/head';
import Banners from '../components/banners';
import Navbar from '../components/navbar';
import Searchbar from '../components/searchbar';
import RecCard from '../components/recCard.js';
import { Box, Typography } from '@mui/material';
import data from '../db/recipeData.js';
import CreateRecipeButton from '../components/createRecipeButton';
import { useUser } from '@auth0/nextjs-auth0';


export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
   
  if (user) {
    return (
      <>

        <Box id="mainBox">
          <Head>
            <title>Craveaway</title>
          </Head>

          <main>
            <Searchbar />
            <Typography sx={{
              mt: "32px", ml: "24px", fontWeight: "600"
            }}>
              Welcome {user.name}!
            </Typography>
            <Banners />
            <Typography mt="32px" ml="24px" fontWeight="600">
              Top recipes today
            </Typography>
            <RecCard data={data} />
            <CreateRecipeButton text={'Create Recipe'} />
          </main>
        </Box>
      </>
    )
  }
  else {
    return (
      <>        <Box id="mainBox">
        <Head>
          <title>Craveaway</title>
        </Head>

        <main>
          <Searchbar />
          {/* <a href="/api/auth/login">Login</a> */}
          <Banners />
          <Typography mt="32px" ml="24px" fontWeight="600">
            Top recipes today
          </Typography>
          <RecCard data={data} />
          <CreateRecipeButton text={'Log in to create a recipe'} />
        </main>
      </Box></>
    )
  }
};

/*
- index.js is where all components are initially accessible from
- recCard is rendered on the index.js main page
- recCard receives data as props from the index.js main page

- in recCard this should be its own component:

            <Typography mt="32px" ml="24px" fontWeight="600">
              Top recipes today
            </Typography>



*/
