
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack'; 

export default function RecipeCard() {
  return (
    <>
      <Card sx={{ maxWidth: 345, alignItems: 'center' }}>
        {' '}
        {/*to be aligned in the centre/center*/}
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <FavoriteBorderIcon />
          <Stack direction="row" spacing={1}>
            <Chip label="Organic" />
          </Stack>
          <CardContent>
            <StarIcon />
            <Typography>5.0</Typography>
            <Typography>(55)</Typography>
            <AccessTimeIcon />
            <Typography>Hi</Typography>
            <Typography>Servings: 69</Typography>
            <Typography>Price per serving: £50,000.00</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
 


