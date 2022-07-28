import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, CardActionArea, CardActions, Stack, Chip } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import GradeIcon from '@mui/icons-material/Grade';




export default function RecCard({data}) {



  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data[0].image}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data[0].title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {data[0].description}
          </Typography>
          <Stack id="rating" direction="row" spacing={0.75} mt="3px">
          <Chip icon={<GradeIcon/>} label="text" variant="outlined" />
    
          

          {/* <GradeIcon fontSize="medium"/>
          <Typography>
            {data[0].rating}
          </Typography> */}
          </Stack>
          <Typography>
            {data[0].timeToCreate} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton variant="plain">
        <FavoriteBorder />
      </IconButton>
      </CardActions>
    </Card>
  );
}

