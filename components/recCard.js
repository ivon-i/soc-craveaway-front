import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  IconButton,
  CardActionArea,
  CardActions,
  Stack,
  Chip,
} from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import GradeIcon from '@mui/icons-material/Grade';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function RecCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345, m: 5 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={data[0].image} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data[0].title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data[0].description}
          </Typography>
          <Stack spacing={2} alignItems="flex-start">
            <Chip
              label={data[0].rating}
              icon={<GradeIcon />}
              variant="outlined"
              size="small"
              sx={{ mt: 2, border: 'none' }}
            />
            <Chip
              label={data[0].timeToCreate}
              icon={<AccessTimeIcon />}
              variant="outlined"
              size="small"
              sx={{ mt: 2, border: 'none' }}
            />
          </Stack>
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
