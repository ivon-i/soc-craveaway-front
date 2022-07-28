
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RecipeCard() {
  return (
    <Card sx={{ maxWidth: 345, alignItems: 'center' }}> {/*to be aligned in the centre/center*/}
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
 
 

// export default function HalfRating() {
//   return (
//     <Stack spacing={1}>
//       <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
//       <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
//     </Stack>
//   );
// }
