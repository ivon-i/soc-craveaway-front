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
    <div>
      <Card sx={{ maxWidth: 185, m: 1, height: 215 }}>
        <CardActionArea id="card-container">
          <div className="imageandcard-container">
            <CardMedia
              component="img"
              height="107.5"
              image={data.image}
              alt=""
            />
            <CardActions
              id="heart-icon-area"
              onClick={() => console.log('Heart icon clicked')}
            >
              <IconButton variant="plain" id="heart-icon">
                <FavoriteBorder />
              </IconButton>
            </CardActions>
          </div>

          <CardContent>
            <Typography gutterBottom fontSize="14px" component="div">
              {data.title}
            </Typography>

            <Stack spacing={0} alignItems="flex-start">
              <Chip
                label={data.rating}
                icon={<GradeIcon />}
                variant="outlined"
                size="small"
                sx={{ mt: 2, border: 'none' }}
              />
              <Chip
                label={data.timeToCreate}
                icon={<AccessTimeIcon />}
                variant="outlined"
                size="small"
                sx={{ mt: 0, border: 'none' }}
              />
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
