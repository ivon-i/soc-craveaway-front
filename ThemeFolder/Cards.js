import {
  Container,
  Grid,
  Paper,
  Box,
  Typography,
  Chip,
  IconButton,
  Button,
} from '@mui/material';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Link from 'next/link';
import { useState } from 'react';
const Cards = ({ data }) => {
  const [list, setList] = useState([
    { id: 1, label: 'Clickable Deletable' },
    { id: 2, label: 'Clickable Deletable' },
    { id: 3, label: 'Clickable Deletable' },
    { id: 4, label: 'Clickable Deletable' },
    { id: 5, label: ' Clickable Deletable' },
  ]);

  function handleFavClick(e, id) {
    setList([...list, { id: id, label: !e.currentTarget.disabled }]);
    // let x = !e.currentTarget.disabled;
    console.log(list);
  }

  async function HeartFav(cardInfo) {
    console.log(cardInfo);
    const response = await fetch('http://craveaway.herokuapp.com/fav/create/', {
      method: 'POST',
      body: JSON.stringify(cardInfo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <Container maxWidth="lg" sx={{ mb: 10 }}>
      {/* <Grid container spacing={5}> */}
      {/* <Grid item xs={6} sm={6} md={4} lg={3}> */}
      {/* {data.map((item) => ( */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexWrap: {
            xs: 'nowrap',
            md: 'wrap',
          },
          '& > div': {
            marginBottom: '24px',
            minWidth: '250px',
            borderRadius: '16px',
            '&:not(:last-child)': { marginRight: '24px' },
          },
          overflowX: 'auto',
          padding: '20px 20px 20px 0',
        }}
      >
        {data.map((item) => (
          <Paper sx={{ overflow: 'hidden' }}>
            <Box
              sx={{
                height: '200px',
                position: 'relative',
              }}
            >
              <Image src={item.image_url} layout="fill" objectFit="cover" />
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
              <IconButton
                onClick={() => {
                  HeartFav(item);
                  // handleFavClick(e, item.recipe_id);
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
                // disabled={heartDisable}
              >
                <FavoriteBorderOutlinedIcon />
              </IconButton>
            </Box>
            <Link href={`/post/${item.recipe_id}`} key={item.recipe_id}>
              <Box padding="16px">
                <Typography
                  variant="h6"
                  sx={{ fontSize: '16px', fontWeight: '500' }}
                >
                  {item.title}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  marginTop="16px"
                  marginBottom="16px"
                >
                  <StarIcon sx={{ color: 'yellow', marginRight: '4px' }} />{' '}
                  {item.rating}
                </Box>
                <Box display="flex" alignItems="center">
                  <AccessTimeIcon
                    sx={{ color: '#343A40', marginRight: '4px' }}
                  />{' '}
                  {item.time}
                </Box>
              </Box>
            </Link>
          </Paper>
        ))}
      </Box>
      {/* ))} */}
      {/* </Grid> */}
      {/* </Grid> */}
    </Container>
  );
};

export default Cards;
