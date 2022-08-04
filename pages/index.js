import Head from 'next/head';
import Banners from '../components/banners';
import Navbar from '../components/navbar';
import Searchbar from '../components/searchbar';
import RecCard from '../components/recCard.js';
import { Box, Typography } from '@mui/material';
import data from '../db/recipeData.js';
import CreateRecipeButton from '../components/createRecipeButton';
import { useState } from 'react';

export async function getServerSideProps() {
  try {
    const response = await fetch(`http://craveaway.herokuapp.com/recipes`);
    const data = await response.json();
    const { payload } = data;
    return { props: { payload } };
  } catch (error) {
    console.log(error.message);
  }
}

export default function Home({ payload }) {
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);

  function filterInput() {
    const filter = payload.filter(
      (r) =>
        r.time?.toUpperCase().includes(search.toUpperCase()) ||
        r.author?.toUpperCase().includes(search.toUpperCase()) ||
        r.title?.toUpperCase().includes(search.toUpperCase())
    );
    setFiltered(filter);
    console.log(filtered);
  }

  return (
    <Box id="mainBox">
      <Head>
        <title>Craveaway</title>
      </Head>

      <main>
        <Searchbar
          searchInput={search}
          setSearchInput={setSearch}
          trigger={filterInput}
        />
        <Banners />
        <Typography mt="32px" ml="24px" fontWeight="600">
          Top recipes today
        </Typography>
        {/* <RecCard
          data={
            payload &&
            payload.filter(
              (r) =>
                r.time?.toUpperCase().includes(search.toUpperCase()) ||
                r.author?.toUpperCase().includes(search.toUpperCase()) ||
                r.title?.toUpperCase().includes(search.toUpperCase())
            )
          }
        /> */}
        <RecCard data={filtered} />
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
