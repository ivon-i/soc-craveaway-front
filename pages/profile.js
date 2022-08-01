import { Typography } from '@mui/material';
import RecCard from '../components/recCard';
import data from '../db/recipeData.js';

// CHANGE THIS DATA TO BE THE CARD THAT YOU HAVE CLICKED , HEART
// BACKEND!!!
// HAVE A EMPTY TABLE, ONCE THE HEART IS CLICKED, POST REQUEST TO THIS TABLE, POPULATE THIS DATA WITH THAT TABLE'S DATA
// TO GET DATA, GET REQUEST FROM THAT TABLE

export default function Profile() {
  return (
    <div>
      <Typography mt="50px">My Profile</Typography>
      <Typography mt="30px" fontWeight={700}>
        FAVOURITE
      </Typography>
      <RecCard data={data} />
    </div>
  );
}
