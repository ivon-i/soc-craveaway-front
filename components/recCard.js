import * as React from 'react';
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import {
  IconButton,
  CardActionArea,
  CardActions,
  Stack,
  Chip,
  Button,
  Grid,
} from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import GradeIcon from '@mui/icons-material/Grade';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Box from '@mui/joy/Box';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

export default function RecCard({ data }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1.5,
        py: 1,
        overflow: 'auto',
        width: '100%',
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
        ml: '5px',
        mt: '10px',
      }}
    >
      {data.map((item) => (
        <Card
          sx={{
            maxWidth: 345,
            border: 'solid',
            borderWidth: '1px',
            borderRadius: 10,
            variant: 'outlined',
            gap: 2,
          }}
          key={item.id}
          elevation={3}
          width="700px"
        >
          <AspectRatio ratio="0.65" sx={{ minWidth: 100, overflow: 'auto' }}>
            <CardMedia
              component="img"
              height="107.5"
              image={item.image}
              alt=""
            />
            <IconButton
              variant="plain"
              id="heart-icon"
              onClick={() => console.log('milfs')}
            >
              <FavoriteBorder />
            </IconButton>
          </AspectRatio>
          <CardContent>
            <Typography gutterBottom fontSize="14px" component="div">
              {item.title}
            </Typography>
            <Stack spacing={0} alignItems="flex-start">
              <Chip
                label={item.rating}
                icon={<GradeIcon />}
                variant="outlined"
                size="small"
                sx={{ mt: 2, border: 'none' }}
              />
              <Chip
                label={item.timeToCreate}
                icon={<AccessTimeIcon />}
                variant="outlined"
                size="small"
                sx={{ mt: 0, border: 'none' }}
              />
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
