import * as React from 'react';
import { IconButton, Stack, Chip } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Rating from '@mui/material/Rating';

export default function RecipeCard() {
  // FOR RATE-THIS-RECIPE-SECTION
  const [value, setValue] = React.useState(4);
  const [item, setItem] = React.useState('');

  function handleClick(e) {
    //use li target value to add to list in profile
  }

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

        <div className="recipe-card-info-container">
          <div className="rating-container">
            <StarIcon />
            <Typography className="rating-number">5.0</Typography>
            <Typography className="rating-amount">(55)</Typography>
          </div>
          <div className="timeToCreate">
            <AccessTimeIcon />
            <Typography className="timeToCreate-text">20mins</Typography>
          </div>
          <div className="serves">
            <PeopleIcon />
            <Typography className="serves-text">2</Typography>
          </div>
          <div className="price">
            <PaymentIcon />
            <Typography className="price-text">£5</Typography>
            <Typography className="serving">(Price per serving)</Typography>
          </div>
        </div>

        <div className="ingredients-container">
          <Typography className="ingredients-title">Ingredients</Typography>

          <button>add</button>
          <ul className="ingredients-items">
            <button>add</button>
            <li>2 Chicken breasts</li>
            <button>addd</button>
            <li>50g Broccoli</li>
            <button>adddd</button>
            <li>100g Rice</li>
            <li>Salsa</li>
            <li>Carrots</li>
          </ul>
        </div>

        <div className="description-container">
          <Typography className="description-title">Description</Typography>
          <Typography className="description-text">
            This salmon salad recipe makes a main dish salad with chopped
            vegetables, flaky fish, and tangy citrus dressing. It has plenty of
            protein and healthy fats, so it’s nutritious and delicious!
          </Typography>
        </div>

        <div className="creator-container">
          <Typography className="creator-title">Creator</Typography>
          <div className="creator-content">
            <AccountCircleIcon />
            <Typography className="creator-name">Raffa</Typography>
          </div>
        </div>

        <div className="ratings-container">
          <Typography className="ratings-title">Rate this recipe</Typography>
          <div className="ratings-content">
            <Rating name="read-only" value={value} />
          </div>
        </div>
      </div>
    </>
  );
}
