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

/*
1. State for each input✅
2. Capture dropdown input into states
  - For time only: 
      - Capture input
      - On submit send post request

3. Repeat for other dropdowns 
4. Repeat for inputs
    - Sort Name input box 

5. Add author/user name

5. have a handleSubmit function that puts states into ordered array
as well as AUTHOR and anything else - ready for patch request
2. Ability to submit  */

const createRecipe = () => {
  const [nameState, setNameState] = useState('');
  const [timeState, setTimeState] = useState('');
  const [servesState, setServesState] = useState('');
  const [priceState, setPriceState] = useState('');
  const [categoryState, setCategoryState] = useState('');
  const [ingredientsState, setIngredientsState] = useState('');
  const [descriptionState, setDescriptionState] = useState('');

  const cookingTime = ['15', '25', '35', '45', '60+'];
  const serves = ['1', '2', '3', '4+'];
  const price = ['£5', '£10', '£15', '£20+'];
  const nutritionCat = ['Vegetarian', 'Vegan', 'Pescatarian', 'Keto'];
  const { user } = useUser();

  // const [ingredientList, setIngredientList] = useState('');
  const [chipList, setChipList] = useState([]);
  const [recipeSelects, setRecipeSelects] = useState([
    { cookingTime: '', serves: '', price: '', category: '' },
  ]);

  function handleNameChange(e) {
    //✅
    setNameState(e.target.value);
  }

  function handleTimeChange(e) {
    //✅
    setTimeState(e.target.value);
  }

  function handleServesChange(e) {
    //✅
    setServesState(e.target.value);
  }

  function handlePriceChange(e) {
    //✅
    setPriceState(e.target.value);
  }

  function handleCategoryChange(e) {
    //✅
    setCategoryState(e.target.value);
  }

  function handleIngredientsChange(e) { 
    setIngredientsState(e.target.value);
  }

  function handleDescriptionChange(e) {
    //✅
    setDescriptionState(e.target.value);
  }

  function handleClick() {
    console.log(timeState)
  }

  // function handleClick() {
  //   console.log(timeState)
  //   const response = await fetch('api/', {
  //     method: 'POST',
  //     body: JSON.stringify({ /*comment*/ }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //   const data = await response.json()
  //   console.log(data)
  // }



  //CODE BELOW IS FOR PREVIOUS INGREDIENTS INPUT?
  // function AddIngredients(e) {
  //   setIngredientList(e.target.value);
  //   console.log(ingredientList);
  // }

  // function AddToChip() {
  //   if (ingredientList.length === 0) {
  //     return;
  //   } else {
  //     setChipList([...chipList, { id: nanoid(), label: ingredientList }]);
  //     setIngredientList('');
  //     console.log(chipList);
  //   }
  // }

  // const handleDelete = (id) => {
  //   const newList = chipList.filter((item) => item.id !== id);
  //   setChipList(newList);
  // };

  return (
    <div>
      <Link href="/">Home</Link>
      <Typography mt="20px">Create your recipe</Typography>
      <Stack spacing={1} sx={{ ml: '10px', mt: '24px' }}>
        <Typography ml="10px">Recipe Name:</Typography>
        <TextField
          sx={{ borderRadius: '8px', width: ' 80%', ml: '30px' }}
          variant="outlined"
          onChange={handleNameChange}
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
      {/* on change = set state + handlechange (which console.logs an array of states) */}
      <Stack spacing={5} direction="row" mt="20px" ml="30px">
        <Stack direction="column">
          <Typography>Cooking Time: </Typography>
          <Select
            sx={{ width: '150px', height: '50px', borderRadius: '20px' }}
            onChange={handleTimeChange}
            value={timeState}
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
            onChange={handleServesChange}
            value={servesState}
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
            onChange={handlePriceChange}
            value={priceState}
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
          onChange={handleCategoryChange}
          value={categoryState}
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
        onChange={handleDescriptionChange}
        placeholder="Add Description"
        multiline
        rows={5}
        required
        label="Required"
      />

      {/* FORMER INGREDIENTS INPUT (CODE BELOW) */}
      {/* <Typography ml="30px" mt="10px">
        Ingredients:
      </Typography>
      <Stack direction="row" mt="10px" ml="30px" spacing={3}>
        <TextField
          sx={{ borderRadius: '8px', width: '220px', ml: '5px' }}
          variant="outlined"
          onChange={handleIngredientsChange}
          placeholder="Add Ingredients"
          value={ingredientsState} //THIS MIGHT NOT BE WORKING
          required
          label="Required"
        />
        <Button
          sx={{ border: 'solid', borderWidth: '1.5px', borderRadius: 3 }}
          variant="outlined"
          onClick={AddToChip}
        >
          Add
        </Button>
      </Stack>

      ADD BUTTON FOR INGREDIENTS
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
          <Chip
            variant="outlined"
            label={item.label}
            onDelete={() => handleDelete(item.id)}
            sx={{ borderColor: '#FCC62E', borderWidth: '1.5px' }}
            key={item.id}
          ></Chip>
        ))}
      </Stack> */}

      {/* DESCRIPTION */}
      <Typography ml="30px">Description</Typography>
      <TextField
        sx={{ borderRadius: '8px', width: ' 80%', ml: '30px' }}
        variant="outlined"
        onChange={handleDescriptionChange}
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
