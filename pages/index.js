// import Head from 'next/head';
// import Banners from '../components/banners';
// import Navbar from '../components/navbar';
// import Searchbar from '../components/searchbar';
// import RecCard from '../components/recCard.js';
// import { Box, Typography } from '@mui/material';
// import data from '../db/recipeData.js';
// import CreateRecipeButton from '../components/createRecipeButton';

// import { useState } from 'react';
// import Link from 'next/link';
// import { useUser } from '@auth0/nextjs-auth0';
// export async function getServerSideProps() {
//   try {
//     const response = await fetch(`http://craveaway.herokuapp.com/recipes`);
//     const data = await response.json();
//     const { payload } = data;
//     return { props: { payload } };
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// export default function Home({ payload }) {
//   const [search, setSearch] = useState('');
//   const [filtered, setFiltered] = useState(payload);

//   function filterInput() {
//     const filter = payload.filter(
//       (r) =>
//         r.time?.toUpperCase().includes(search.toUpperCase()) ||
//         r.author?.toUpperCase().includes(search.toUpperCase()) ||
//         r.title?.toUpperCase().includes(search.toUpperCase())
//     );
//     setFiltered(filter);
//     console.log(filtered);
//   }

//   const { user, error, isLoading } = useUser();
//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;
//   if (user) {
//     return (
//       <Box id="mainBox">
//         <Head>
//           <title>Craveaway</title>
//         </Head>

//         <main>
//           <Searchbar
//             searchInput={search}
//             setSearchInput={setSearch}
//             trigger={filterInput}
//           />
//           <Banners />
//           <Typography mt="32px" ml="24px" fontWeight="600">
//             Top recipes today
//           </Typography>
//           <RecCard data={filtered} />;
//           <CreateRecipeButton text={'Create Recipe'} />
//         </main>
//       </Box>
//     );
//   } else {
//     return (
//       <>
//         {' '}
//         <Box id="mainBox">
//           <Head>
//             <title>Craveaway</title>
//           </Head>
//           <main>
//             <Searchbar
//               searchInput={search}
//               setSearchInput={setSearch}
//               trigger={filterInput}
//             />
//             {/* <a href="/api/auth/login">Login</a> */}
//             <Banners />
//             <Typography mt="32px" ml="24px" fontWeight="600">
//               Top recipes today
//             </Typography>
//             <RecCard data={filtered} />;
//             <CreateRecipeButton text={'Log in to create a recipe'} />
//           </main>
//         </Box>
//       </>
//     );
//   }
// }

/*
- index.js is where all components are initially accessible from
- recCard is rendered on the index.js main page
- recCard receives data as props from the index.js main page
- in recCard this should be its own component:
            <Typography mt="32px" ml="24px" fontWeight="600">
              Top recipes today
            </Typography>
*/

// BELOW ORIGIAL THEME AND MAIN

// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
// import { Navbar } from '../ThemeFolder/Navbar.js';
// import { Container } from '@mui/system';
// import Categories from '../ThemeFolder/Categories';
// import { Hero } from '../ThemeFolder/Hero';
// import Cards from '../ThemeFolder/Cards';
// import { Box, Hidden, Typography } from '@mui/material';
// import AddRecipeButton from '../ThemeFolder/AddRecipeButton';
// import { useState } from 'react';
// import Input from '../ThemeFolder/Input';
// import Link from 'next/link';
// import { useUser } from '@auth0/nextjs-auth0';

// export async function getServerSideProps() {
//   try {
//     const response = await fetch(`http://craveaway.herokuapp.com/recipes`);
//     const data = await response.json();
//     const { payload } = data;
//     return { props: { payload } };
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// export default function Home({ payload }) {
//   const [search, setSearch] = useState('');
//   const [filtered, setFiltered] = useState(payload);
//   function filterInput() {
//     const filter = payload.filter(
//       (r) =>
//         r.time?.toUpperCase().includes(search.toUpperCase()) ||
//         r.author?.toUpperCase().includes(search.toUpperCase()) ||
//         r.title?.toUpperCase().includes(search.toUpperCase())
//     );
//     setFiltered(filter);
//     console.log(filtered);
//   }

//   const { user, error, isLoading } = useUser();
//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;
//   if (user) {
//     return (
//       <div>
//         <Head>
//           <title>Create Next App</title>
//           <meta name="description" content="Generated by create next app" />
//           <link rel="icon" href="/favicon.ico" />
//         </Head>
//         <Box
//           sx={{
//             boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
//             paddingBottom: '48px',
//           }}
//         >
//           <Navbar />
//           <Hidden mdDown>
//             <Input
//               searchInput={search}
//               setSearchInput={setSearch}
//               trigger={filterInput}
//             />
//           </Hidden>
//           <Categories />
//           {/* style={{ maxWidth: '812px', margin: '0 auto' }} */}
//           <Box>
//             <Hero />
//           </Box>
//         </Box>
//         <Container maxWidth="lg">
//           <Typography
//             variant="h5"
//             sx={{ fontWeight: '600', marginTop: '80px', marginBottom: '16px' }}
//           >
//             Top recipes
//           </Typography>
//         </Container>
//         <Box>
//           <Cards data={filtered} />
//         </Box>
//         {/* <Container maxWidth="lg">
//         <Typography
//           variant="h5"
//           sx={{ fontWeight: '600', marginTop: '80px', marginBottom: '16px' }}
//         >
//           Newest recipes
//         </Typography>
//       </Container> */}
//         {/* <Box>
//         <Cards />
//       </Box> */}
//         <Hidden smUp>
//           <Container
//             maxWidth="lg"
//             zIndex="100"
//             sx={{
//               position: 'fixed',
//               bottom: '0px',
//               left: '50%',
//               transform: 'translateX(-50%)',
//               backgroundColor: '#fff',
//               zIndex: '200',
//               paddingBottom: '24px',
//             }}
//           >
//             <AddRecipeButton
//               sx={{
//                 width: '100%',
//               }}
//               text="Create Recipe"
//             />
//           </Container>
//         </Hidden>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <Head>
//           <title>Create Next App</title>
//           <meta name="description" content="Generated by create next app" />
//           <link rel="icon" href="/favicon.ico" />
//         </Head>
//         <Box
//           sx={{
//             boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
//             paddingBottom: '48px',
//           }}
//         >
//           <Navbar />
//           <Hidden mdDown>
//             <Input
//               searchInput={search}
//               setSearchInput={setSearch}
//               trigger={filterInput}
//             />
//           </Hidden>
//           <Categories />
//           {/* style={{ maxWidth: '812px', margin: '0 auto' }} */}
//           <Box>
//             <Hero />
//           </Box>
//         </Box>
//         <Container maxWidth="lg">
//           <Typography
//             variant="h5"
//             sx={{ fontWeight: '600', marginTop: '80px', marginBottom: '16px' }}
//           >
//             Top recipes
//           </Typography>
//         </Container>
//         <Box>
//           <Cards data={filtered} />
//         </Box>
//         {/* <Container maxWidth="lg">
//         <Typography
//           variant="h5"
//           sx={{ fontWeight: '600', marginTop: '80px', marginBottom: '16px' }}
//         >
//           Newest recipes
//         </Typography>
//       </Container> */}
//         {/* <Box>
//         <Cards />
//       </Box> */}
//         <Hidden smUp>
//           <Container
//             maxWidth="lg"
//             zIndex="100"
//             sx={{
//               position: 'fixed',
//               bottom: '0px',
//               left: '50%',
//               transform: 'translateX(-50%)',
//               backgroundColor: '#fff',
//               zIndex: '200',
//               paddingBottom: '24px',
//             }}
//           >
//             <AddRecipeButton
//               sx={{
//                 width: '100%',
//               }}
//               text="Create Recipe"
//             />
//           </Container>
//         </Hidden>
//       </div>
//     );
//   }
// }

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
    return { props: { payload} };
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
      {/* <Box
        sx={{
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
          paddingBottom: '48px',
        }}
      > */}
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
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{
            fontWeight: '600',
            marginTop: {
              xs: '40px',
              md: '80px',
            },
            marginBottom: '16px',
          }}
        >
          Top recipes
        </Typography>
      </Container>
      <Box>
        <Cards data={filtered} />
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
