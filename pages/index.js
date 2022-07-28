import Head from 'next/head';
import Banners from '../components/banners';
import Navbar from '../components/navbar';
import Searchbar from '../components/searchbar';
import Card from '../components/recCard.js';
import { Box } from '@mui/material';
import data from '../db/recipeData.js';
import Recipelist from '../components/recipeList.js';

export default function Home() {
  return (
    <Box id="mainBox">
      <Head>
        <title>Craveaway</title>
      </Head>

      <main>
        <Navbar></Navbar>
        <Searchbar />
        <Banners />
        <Recipelist />
      </main>
    </Box>
  );
}
