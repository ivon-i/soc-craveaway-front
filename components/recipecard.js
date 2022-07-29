
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
import Box from '@mui/material/Box';

export default function RecipeCard() {
  return (
    <>
      <Card sx={{ maxWidth: 345, alignItems: 'center' }}>
        {/*to be aligned in the centre/center*/}
        <CardActionArea>
          <CardMedia sx={{
            component:"img",
            height:"140px",
            image:"/static/images/cards/contemplative-reptile.jpg",
            alt:"green iguana",
            position:"relative",
            display: "flex",
            justifyContent: "flex-end"
          }}
          />
          <FavoriteBorderIcon   sx={{
            color: 'orange',
            fontSize: "30px",
            position: 'absolute',
            display: "flex",
            justifyContent: "flex-end",
            bottom: "25%",
            right: "10%",
          }} />

          <Stack direction="row" spacing={1}>
            <Chip label="Organic" sx={{
            color: 'orange',
            fontSize: "12px",
            position: 'absolute',
            display: "flex",
            justifyContent: "flex-end",
            top: "5%",
            right: "10%",
          }}  />
          </Stack>
          <CardContent>
            <Box sx={{
              justifyContent: "flex-start",
              display: "left",
            }}>
            <StarIcon />
            <Typography>5.0</Typography>
            <Typography>(55)</Typography>
            </Box>
            
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
 


