import Link from 'next/link';
// import { nanoid } from 'nanoid';

import {
  Typography,
  Stack,
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
  Chip,
} from '@mui/material';
import { useState } from 'react';
import { NavigateNextOutlined } from '@mui/icons-material';
import { useUser } from '@auth0/nextjs-auth0';

const createRecipe = () => {
  const cookingTime = ['15', '25', '35', '45', '60+'];
  const serves = ['1', '2', '3', '4+'];
  const price = ['£5', '£10', '£15', '£20+'];
  const nutritionCat = ['Vegetarian', 'Vegan', 'Pescatarian', 'Keto'];
  const { user } = useUser();

  const newRecipe = {
    title: '',
    author: /*`${user}`*/ 'ME',
    description: '',
    time: '',
    cost: '',
    nutrition: '',
    ingredients: '',
    image: 'ngf',
    serves: '',
  };

  const [newRecipeSubmission, setNewRecipeSubmission] = useState(newRecipe);

  const handleChangeFor = (propertyName) => (e) => {
    setNewRecipeSubmission((newRecipeSubmission) => ({
      ...newRecipeSubmission,
      [propertyName]: e.target.value,
    }));
    console.log(newRecipeSubmission);
  };

  const handleClick = async () => {
    const response = await fetch(
      'http://craveaway.herokuapp.com/recipes/create/',
      {
        method: 'POST',
        body: JSON.stringify(newRecipeSubmission),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    setNewRecipeSubmission(newRecipe);
    console.log(data);
  };

  return (
    <div>
      <Link href="/">Home</Link>
      <Typography mt="20px">Create your recipe</Typography>
      <Stack spacing={1} sx={{ ml: '10px', mt: '24px' }}>
        <Typography ml="10px">Recipe Name:</Typography>
        <TextField
          sx={{ borderRadius: '8px', width: ' 80%', ml: '30px' }}
          variant="outlined"
          value={newRecipeSubmission.title}
          onChange={handleChangeFor('title')}
          placeholder="Add Name"
          multiline
          rows={1}
          required
          label="Required"
        />
      </Stack>
      {/* IMAGE */}
      <Box
        sx={{
          width: '95%',
          ml: '5px',
          height: '150px',
          mt: '24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'solid',
          borderWidth: '1px',
          borderRadius: 3,
        }}
      >
        <Button variant="text" component="label">
          + Upload Image
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </Box>

      {/* COOKING TIME */}
      <Stack spacing={5} direction="row" mt="20px" ml="30px">
        <Stack direction="column">
          <Typography>Cooking Time: </Typography>
          <Select
            sx={{ width: '150px', height: '50px', borderRadius: '20px' }}
            value={newRecipeSubmission.time}
            onChange={handleChangeFor('time')}
            defaultValue=""
          >
            {cookingTime.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </Stack>

        {/* SERVES */}
        <Stack direction="column">
          <Typography>Serves: </Typography>
          <Select
            sx={{ width: '150px', height: '50px', borderRadius: '20px' }}
            value={newRecipeSubmission.serves}
            onChange={handleChangeFor('serves')}
            defaultValue=""
          >
            {serves.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </Stack>
      </Stack>

      <Box sx={{ width: '100%' }}>
        {/* PRICE PER SERVING */}
        <Stack direction="column" mt="20px" ml="30px">
          <Typography>Estimated price per serving: </Typography>
          <Select
            sx={{ width: '150px', height: '50px', borderRadius: '20px' }}
            value={newRecipeSubmission.cost}
            onChange={handleChangeFor('cost')}
            defaultValue=""
          >
            {price.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </Stack>
      </Box>
      <Stack direction="column" mt="20px" ml="30px">
        <Typography>Nutrition category: </Typography>
        <Select
          sx={{ width: '150px', height: '50px', borderRadius: '20px' }}
          value={newRecipeSubmission.nutrition}
          onChange={handleChangeFor('nutrition')}
          defaultValue=""
        >
          {nutritionCat.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </Stack>

      {/* INGREDIENTS */}
      <Typography ml="30px">Ingredients</Typography>
      <TextField
        sx={{ borderRadius: '8px', width: ' 80%', ml: '30px' }}
        variant="outlined"
        value={newRecipeSubmission.ingredients}
        onChange={handleChangeFor('ingredients')}
        placeholder="Add Ingredients"
        multiline
        rows={5}
        required
        label="Required"
      />

      {/* DESCRIPTION */}
      <Typography ml="30px">Description</Typography>
      <TextField
        sx={{ borderRadius: '8px', width: ' 80%', ml: '30px' }}
        variant="outlined"
        value={newRecipeSubmission.description}
        onChange={handleChangeFor('description')}
        placeholder="Add Description"
        multiline
        rows={5}
        required
        label="Required"
      />

      <button className="submitRecipeButton" onClick={handleClick}>
        Submit Recipe
      </button>
    </div>
  );
};

export default createRecipe;
