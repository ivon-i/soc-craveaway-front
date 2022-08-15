import {
  Paper,
  Box,
  Typography,
  Chip,
  IconButton,
  Hidden,
} from '@mui/material';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

import { useState } from 'react';
const Cards = ({ item }) => {
  const { user } = useUser();
  const [favExists, setFavExists] = useState(false);

  // This function allows the user to add a favourite recipe to their profile.
  //It posts the user's username and recipe data so it can later on appear on the profile page for that user.
  //It also checks if the data.payload is true, if so the heart icon will be desabled for that card. This logic can be found on lines 66-106.

  async function HeartFav(cardInfo) {
    let array = [cardInfo];
    const favCardInfo = array.map((object) => {
      return { ...object, userName: `${user.name}` };
    });
    const response = await fetch(
      'https://craveaway.herokuapp.com/fav/create/',
      {
        method: 'POST',
        body: JSON.stringify(favCardInfo[0]),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.payload === true) {
      setFavExists(data.payload);
    }
  }
  return (
    <div>
      <Paper sx={{ overflow: 'hidden', borderRadius: '16px' }}>
        <Box
          sx={{
            height: '200px',
            position: 'relative',
            backgroundColor: '#34393C',
          }}
        >
          <Image src={item.image_url} alt={item.title} layout="fill" objectFit="cover" />
          <Chip
            color="success"
            label={item.nutrition}
            sx={{
              zIndex: 100,
              position: 'absolute',
              top: '16px',
              right: '16px',
            }}
          />
          {favExists ? (
            <IconButton
              onClick={() => {
                HeartFav(item);
              }}
              sx={{
                zIndex: 101,
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                backgroundColor: '#fff',
                borderRadius: '100%',
                padding: '8px',
                fontSize: '40px',
                color: '#FF6B6B',
              }}
              disabled
            >
              <FavoriteBorderOutlinedIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                HeartFav(item);
              }}
              sx={{
                zIndex: 101,
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                backgroundColor: '#fff',
                borderRadius: '100%',
                padding: '8px',
                fontSize: '40px',
                color: '#FF6B6B',
              }}
            >
              <FavoriteBorderOutlinedIcon />
            </IconButton>
          )}
        </Box>
        <Link href={`/post/${item.recipe_id}`} key={item.recipe_id}>
          <Box padding="16px" sx={{ cursor: 'pointer' }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '16px',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                overflowX: 'Hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {item.title}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              marginTop="16px"
              marginBottom="16px"
            >
              <StarIcon sx={{ color: '#FCC62E', marginRight: '4px' }} />{' '}
              {item.rating}
            </Box>
            <Box display="flex" alignItems="center">
              <AccessTimeIcon sx={{ color: '#343A40', marginRight: '4px' }} />{' '}
              {item.time}
            </Box>
          </Box>
        </Link>
      </Paper>
    </div>
  );
};

export default Cards;
