import Head from 'next/head';
import { Navbar } from '../components/Navbar.js';
import { Container } from '@mui/system';
import Categories from '../components/Categories.js';
import { Hero } from '../components/Hero.js';
import Cards from '../components/Cards';
import { Box, Hidden, Typography } from '@mui/material';
import AddRecipeButton from '../components/AddRecipeButton.js';
import { useState } from 'react';
import Input from '../components/Input.js';
import AddIcon from '@mui/icons-material/Add';
import MobileHero from '../components/MobileHero.js';
import Footer from '../components/Footer.js';

//This function will pre-render the home page on each request using the data returned by getServerSideProps: In this case "payload" which is the recipe card's content.
export async function getServerSideProps() {
  try {
    const response = await fetch(`https://craveaway.herokuapp.com/recipes`);
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
  const [limit, setLimit] = useState(4);
  const [recipeTypography, setRecipeTypography] = useState(false);

  const filterCategoryRecipe = (name) => {
    const newRecipes = payload.filter((recipe) => recipe.categories === name);
    console.log(newRecipes);
    setFiltered(newRecipes);
  };

  // This function filters through payload to check what the users search bar input versus what it is in the payload.
  function filterInput() {
    const filter = payload.filter(
      (r) =>
        r.time?.toUpperCase().includes(search.toUpperCase()) ||
        r.author?.toUpperCase().includes(search.toUpperCase()) ||
        r.title?.toUpperCase().includes(search.toUpperCase()) ||
        r.nutrition?.toUpperCase().includes(search.toUpperCase())
    );
    setFiltered(filter);
    setRecipeTypography(true);
  }

  function getAllRecipes() {
    setLimit(payload.length);
    setFiltered(payload);
    console.log(payload.length);
  }

  return (
    <div>
      <Head>
        <title> Craveaway </title>
        <meta name="description" content="Craveaway App" />
        <link rel="icon" href="/craveawayicon.svg" alt="Craveaway logo" />
      </Head>
      <Navbar
        searchInput={search}
        setSearchInput={setSearch}
        trigger={filterInput}
      />
      <Hidden mdUp>
        <Container maxWidth="sm">
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
      <Categories filterCategoryRecipe={filterCategoryRecipe} />
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
        {recipeTypography ? (
          <Typography
            variant="h6"
            sx={{
              fontWeight: '600',
            }}
          >
            Search Results
          </Typography>
        ) : (
          <Typography
            variant="h6"
            sx={{
              fontWeight: '600',
            }}
          >
            Featured recipes
          </Typography>
        )}

        <Typography
          sx={{ cursor: 'pointer', fontWeight: '500' }}
          onClick={() => {
            getAllRecipes();
          }}
        >
          View All
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
            {filtered.length > 0 ? (
              filtered.slice(0, limit ? limit : filtered.length).map((item) => {
                return <Cards item={item} />;
              })
            ) : (
              <Typography
                variant="h6"
                sx={{
                  fontWeight: '600',
                }}
                color="red"
              >
                Sorry, no results found
              </Typography>
            )}
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
            aria-label="Create Recipe"
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
      <Footer />
    </div>
  );
}
