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