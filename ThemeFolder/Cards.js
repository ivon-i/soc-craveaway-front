import {
  Container,
  Grid,
  Paper,
  Box,
  Typography,
  Chip,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Link from 'next/link';

const Cards = ({ data }) => {
  function HeartFav() {
    // POST REQUEST HERE
    console.log('milfs');
  }

  return (
    <Container maxWidth="lg" sx={{ mb: 10 }}>
      {/* <Grid container spacing={5}> */}
      {/* <Grid item xs={6} sm={6} md={4} lg={3}> */}
      {/* {data.map((item) => ( */}
      <Box
        sx={{
          display: 'flex',
          '& > *': {
            minWidth: '250px',
            borderRadius: '12px',
            '&:not(:last-child)': { marginRight: '24px' },
          },
          overflowX: 'auto',
          padding: '20px',
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
              <Image src="/test.jpg" layout="fill" />
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
                onClick={HeartFav}
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
