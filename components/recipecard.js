

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
            src:"https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpY2tlbiUyMGJyb2Njb2xpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
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
              display: "flex",
              justifyContent: "flex-start",
              alignContent: "space-around"
            }}>
            <StarIcon />
            <Typography>5.0</Typography>
            <Typography>(55)</Typography>
            </Box>
            
            <Box></Box>
            <AccessTimeIcon />
            <Typography>20 mins</Typography>
            <Typography>Servings: 69</Typography>
            <Typography>Price per serving: £50,000.00</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
 




