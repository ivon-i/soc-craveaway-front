import Link from 'next/link';
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

const createRecipe = () => {
  const cookingTime = ['15', '25', '35', '45', '60+'];
  const serves = ['1', '2', '3', '4+'];
  const price = ['£5', '£10', '£15', '£20+'];
  const nutritionCat = ['Vegetarian', 'Vegan', 'Pescatarian', 'Keto'];

  const [ingredientList, setIngredientList] = useState('');
  const [chipList, setChipList] = useState([]);

  function AddIngredients(e) {
    setIngredientList(e.target.value);
    console.log(ingredientList);
  }

  function AddToChip() {
    setChipList([...chipList, ingredientList]);
    setIngredientList('');
    console.log(chipList);
  }

  return (
    <div>
      <Link href="/">Home</Link>
      <Typography mt="20px">Create your recipe</Typography>
      <Stack spacing={1} sx={{ ml: '10px', mt: '24px' }}>
        <Typography>Name:</Typography>
        <TextField
          sx={{ borderRadius: '8px', width: '95%', ml: '5px' }}
          variant="outlined"
        />
      </Stack>
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
      <Stack spacing={5} direction="row" mt="20px" ml="30px">
        <Stack direction="column">
          <Typography>Cooking Time: </Typography>
          <Select sx={{ width: '150px' }}>
            {cookingTime.map((item) => (
              <MenuItem>{item}</MenuItem>
            ))}
          </Select>
        </Stack>
        <Stack direction="column">
          <Typography>Serves: </Typography>
          <Select sx={{ width: '150px' }}>
            {serves.map((item) => (
              <MenuItem>{item}</MenuItem>
            ))}
          </Select>
        </Stack>
      </Stack>
      <Box sx={{ width: '100%' }}>
        <Stack direction="column" mt="20px" ml="30px">
          <Typography>Estimated price per serving: </Typography>
          <Select sx={{ width: '150px' }}>
            {price.map((item) => (
              <MenuItem>{item}</MenuItem>
            ))}
          </Select>
        </Stack>
      </Box>
      <Stack direction="column" mt="20px" ml="30px">
        <Typography>Nutrition category: </Typography>
        <Select sx={{ width: '150px' }}>
          {nutritionCat.map((item) => (
            <MenuItem>{item}</MenuItem>
          ))}
        </Select>
      </Stack>
      <Typography ml="30px" mt="10px">
        Ingredients:
      </Typography>
      <Stack direction="row" mt="10px" ml="30px" spacing={3}>
        <TextField
          sx={{ borderRadius: '8px', width: '220px', ml: '5px' }}
          variant="outlined"
          onChange={AddIngredients}
          placeholder="Add Ingredients"
          value={ingredientList}
        />
        <Button
          sx={{ border: 'solid', borderWidth: '1.5px', borderRadius: 3 }}
          variant="outlined"
          onClick={AddToChip}
        >
          Add
        </Button>
      </Stack>
      <Stack
        spacing={1}
        sx={{
          maxWidth: 345,
          display: 'flex',
          alignContent: 'flex-start',
          flexWrap: 'wrap',
          ml: '30px',
          mt: '10px',
        }}
      >
        {chipList.map((item) => (
          <Chip label={item} variant="filled"></Chip>
        ))}
      </Stack>
      <Typography ml="30px">Description</Typography>
      <TextField
        sx={{ borderRadius: '8px', width: ' 80%', ml: '30px' }}
        variant="outlined"
        onChange={AddIngredients}
        placeholder="Add Description"
        multiline
        rows={5}
      />
      <button className="submitRecipeButton">Submit Recipe</button>
    </div>
  );
};

export default createRecipe;
