import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Navbar } from '../ThemeFolder/Navbar.js';
import { Container } from '@mui/system';
import Categories from '../ThemeFolder/Categories';
import { Hero } from '../ThemeFolder/Hero';
import Cards from '../ThemeFolder/Cards';
import { Box, Hidden, Typography } from '@mui/material';
import AddRecipeButton from '../ThemeFolder/AddRecipeButton';
import { useState } from 'react';
import Input from '../ThemeFolder/Input';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import MobileHero from '../components/MobileHero';

export async function getServerSideProps() {
  try {
    const response = await fetch(`http://craveaway.herokuapp.com/recipes`);
    const data = await response.json();
    const { payload } = data;
    const avg = data.average;
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
  return (
    <div>
      <Head>
        <title> Craveaway </title>
        <meta name="description" content="Craveaway App" />
        <link rel="icon" href="/craveawayicon.svg" />
      </Head>
      <Navbar
        searchInput={search}
        setSearchInput={setSearch}
        trigger={filterInput}
      />
      <Hidden mdUp>
        <Container maxWidth="lg">
          <Input
            sx={{ mt: '24px' }}
            searchInput={search}
            setSearchInput={setSearch}
            trigger={filterInput}
          />
        </Container>
      </Hidden>
      <Box>
        <Hidden smDown>
          <Hero />
        </Hidden>
      </Box>
      {/* </Box> */}
      <Categories />
      <Hidden smUp>
        <Container maxWidth="lg">
          <MobileHero />
        </Container>
      </Hidden>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: {
            xs: '16px',
            sm: '64px',
            md: '80px',
          },
          marginBottom: '16px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: '600',
          }}
        >
          Featured recipes
        </Typography>
        <Typography
          sx={{ cursor: 'pointer', backgroundColor: 'red' }}
          onClick={() => {
            getAllRecipes();
          }}
        >
          All
        </Typography>
      </Container>
      <Box>
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
            {filtered.length > 0
              ? filtered.map((item) => {
                  console.log(item);
                  return <Cards item={item} />;
                })
              : ''}
          </Box>
        </Container>
      </Box>
      <Hidden smUp>
        <Container
          maxWidth="lg"
          zIndex="100"
          sx={{
            position: 'fixed',
            bottom: '0px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#fff',
            zIndex: '200',
            paddingBottom: '24px',
          }}
        >
          <AddRecipeButton
            component="button"
            variant="contained"
            size="large"
            icon={<AddIcon sx={{ marginRight: '4px' }} />}
            sx={{
              marginTop: '24px',
              fontSize: '20px',
              width: '100%',
            }}
            text="Create Recipe"
          />
        </Container>
      </Hidden>
    </div>
  );
}
