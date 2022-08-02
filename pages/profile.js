import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { Typography } from '@mui/joy';

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <img src={user.picture} alt={user.name} />
        Welcome {user.name}!
      </div>
    );
  }
  return (
    <>
      {user && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>)}
      : {(
        <div>
          <Typography sx={{
            marginTop: 15,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",     
                 
          }}>You must login to access your profile</Typography>
          <Link href="/api/auth/login" passHref>
            <button
              variant="outlined"
              className="fixedLoginButton"
            >Login
            </button>
          </Link>
        </div>)}
    </>
  )
};

/////////////old profile code

// import { Typography, Chip, Stack } from '@mui/material';
// import RecCard from '../components/recCard';
// import data from '../db/recipeData.js';
// import { useState } from 'react';
// import { Box } from '@mui/system';

// // CHANGE THIS DATA TO BE THE CARD THAT YOU HAVE CLICKED , HEART
// // BACKEND!!!
// // HAVE A EMPTY TABLE, ONCE THE HEART IS CLICKED, POST REQUEST TO THIS TABLE, POPULATE THIS DATA WITH THAT TABLE'S DATA
// // TO GET DATA, GET REQUEST FROM THAT TABLE

// export default function Profile() {
//   const [list, setList] = useState([
//     { id: 1, label: 'Clickable Deletable' },
//     { id: 2, label: 'Clickable Deletable' },
//     { id: 3, label: 'Clickable Deletable' },
//     { id: 4, label: 'Clickable Deletable' },
//     { id: 5, label: 'Clickable Deletable' },
//   ]);
//   const [list2, setList2] = useState([]);

//   const [shopEmp, setShopEmp] = useState(false);

//   const handleClick = (e) => {
//     console.info(e.currentTarget.innerText);
//   };

//   const handleDelete = (id) => {
//     const newList = list.filter((item) => item.id !== id);
//     setList(newList);
//   };

//   return (
//     <Box ml="15px">
//       <Typography variant="h4" mt="50px">
//         My Profile
//       </Typography>
//       <Typography mt="30px" fontWeight={700}>
//         Favourite
//       </Typography>
//       <RecCard data={data} />
//       <Stack
//         direction="column"
//         spacing={2}
//         mt="15px"
//         sx={{
//           maxWidth: 345,
//           display: 'flex',
//           alignContent: 'flex-start',
//           flexWrap: 'wrap',
//         }}
//       >
//         <Typography fontWeight={700}>Shopping List</Typography>
//         {list2.length === 4
//           ? setShopEmp(true) && (
//               <Typography fontWeight={700}>Add smt</Typography>
//             )
//           : null}
//         {list.map((item) => (
//           <Chip
//             variant="outlined"
//             label={item.label}
//             onClick={handleClick}
//             onDelete={() => handleDelete(item.id)}
//             sx={{ borderColor: '#FCC62E', borderWidth: '1.5px' }}
//           ></Chip>
//         ))}
//       </Stack>
//     </Box>
//   )

//   return <a href="/api/auth/login">Login</a>;
// };