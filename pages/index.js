import Head from 'next/head';
import Banners from '../components/banners';
import Navbar from '../components/navbar';
import Searchbar from '../components/searchbar';
import RecCard from '../components/recCard.js';
import { Box } from '@mui/material';
import data from '../db/recipeData.js';
import CreateRecipeButton from '../components/createRecipeButton';


export default function Home() {
  return (
    <Box id="mainBox">
      <Head>
        <title>Craveaway</title>
      </Head>

      <main>
        <Searchbar />
        <Banners />
        <RecCard data={data} />
        <CreateRecipeButton text={'Create Recipe'} />
      </main>
    </Box>
  );
}

/*
- index.js is where all components are initially accessible from
- recCard is rendered on the index.js main page
- recCard receives data as props from the index.js main page

- in recCard this should be its own component:

            <Typography mt="32px" ml="24px" fontWeight="600">
              Top recipes today
            </Typography>



*/
