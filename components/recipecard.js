import * as React from 'react';
import { IconButton, Stack, Chip } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import StarIcon from '@mui/icons-material/Star';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';

export default function RecipeCard() {
  return (
    <>
      <div className="card-content-container">
        <div className="card-image-container">
          <img src="" alt="some-image" className="card-image" />
          <Stack direction="row" spacing={1}>
            <Chip
              className="chip-mui"
              label="Organic"
              sx={{
                color: '#fff',
                fontSize: '12px',
                position: 'absolute',
                display: 'flex',
                justifyContent: 'flex-end',
                top: '8px',
                right: '8px',
                backgroundColor: '#14AE5C',
              }}
            />
            <IconButton
              sx={{ position: 'absolute', bottom: '8px', right: '8px' }}
              variant="plain"
              id="heart-icon"
              onClick={() => console.log('milfs')}
            >
              <FavoriteBorder />
            </IconButton>
          </Stack>
        </div>
      </div>

      <div className="recipe-card-info-container">
        <div className="rating-container">
          <StarIcon />
          <p className="rating-number">5.0</p>
          <p className="rating-amount">(55)</p>
        </div>
        <div className="timeToCreate">
          <AccessTimeIcon />
          <p className="timeToCreate-text">20mins</p>
        </div>
        <div className="serves">
          <PeopleIcon />
          <p className="serves-text">2</p>
        </div>
        <div className="price">
          <PaymentIcon />
          <p className="price-text">£5</p>
          <p className="serving">(Price per serving)</p>
        </div>
      </div>
      <div className="ingredients-container">
        <p className="ingredients-title">Ingredients</p>

        <ul className="ingredients-items">
          <li>2 Chicken breasts</li>
          <li>50g Broccoli</li>
          <li>100g Rice</li>
          <li>Salsa</li>
          <li>Carrots</li>
        </ul>
      </div>

      <div className="description-container">
        <textarea rows="10" cols="40"></textarea>
      </div>

      <div className="creator-container"></div>
    </>
  );
}
