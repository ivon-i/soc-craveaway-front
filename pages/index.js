import Head from 'next/head';
import Banners from '../components/banners';
import Navbar from '../components/navbar';
import Searchbar from '../components/searchbar';
import RecCard from '../components/recCard.js';
import { Box, Typography } from '@mui/material';
import data from '../db/recipeData.js';
import CreateRecipeButton from '../components/createRecipeButton';

import { useState } from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
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
  const [filtered, setFiltered] = useState(payload);

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
  
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
 
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
        <RecCard data={filtered} />;
        <CreateRecipeButton text={'Create Recipe'} />
      </main>
    </Box>
  );
}
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
