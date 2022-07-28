import Head from 'next/head';
import Banners from '../components/banners';
import Navbar from '../components/navbar';
import Searchbar from '../components/searchbar';
import Card from "../components/recCard";
import {Box} from "@mui/material"
import data from "../db/recipeData.js"

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
        <Card data={data}/>
      </main>
    </Box>
  );
}
