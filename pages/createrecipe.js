import Link from 'next/link';
import { nanoid } from 'nanoid';
import { useUser } from '@auth0/nextjs-auth0';

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

/*
1. Check that all necessary components are rendered based on back end columns. 
  Require:
    - Author
    - rating
    - rating_entries
2. 
*/

const createRecipe = () => {
  const cookingTime = ['15', '25', '35', '45', '60+'];
  const serves = ['1', '2', '3', '4+'];
  const price = ['£5', '£10', '£15', '£20+'];
  const nutritionCat = ['Vegetarian', 'Vegan', 'Pescatarian', 'Keto'];

  const [ingredientList, setIngredientList] = useState('');
  const [chipList, setChipList] = useState([]); //CHIP 1/3
  const [recipeSelects, setRecipeSelects] = useState([
    { cookingTime: '', serves: '', price: '', category: '' },
  ]);
  const { user, error, isLoading } = useUser();

  function handleChangeee(e) {
    console.info(e.target.value);
  }

  function AddIngredients(e) {
    setIngredientList(e.target.value);
    console.log(ingredientList);
  }

  function AddToChip() {
    //CHIP 2/3
    if (ingredientList.length === 0) {
      return;
    } else {
      setChipList([...chipList, { id: nanoid(), label: ingredientList }]);
      setIngredientList('');
      console.log(chipList);
    }
  }

  const handleDelete = (id) => {
    const newList = chipList.filter((item) => item.id !== id);
    setChipList(newList);
  };
  if (user) {
    return (
      <div>
        <Link href="/">Home</Link>
        <Typography mt="20px">Create your recipe</Typography>
        <Stack spacing={1} sx={{ ml: '10px', mt: '24px' }}>
          <Typography>Name:</Typography>
          <TextField
            sx={{ borderRadius: '8px', width: '95%', ml: '5px' }}
            variant="outlined"
            required
            label="Required"
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
            <Select
              sx={{ width: '150px', height: '50px', borderRadius: '20px' }}
              onChange={handleChangeee}
              value={recipeSelects.cookingTime}
              defaultValue=""
            >
              {cookingTime.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </Stack>
          <Stack direction="column">
            <Typography>Serves: </Typography>
            <Select
              sx={{ width: '150px', height: '50px', borderRadius: '20px' }}
              onChange={handleChangeee}
              value={recipeSelects.serves}
              defaultValue=""
            >
              {serves.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </Stack>
        </Stack>
        <Box sx={{ width: '100%' }}>
          <Stack direction="column" mt="20px" ml="30px">
            <Typography>Estimated price per serving: </Typography>
            <Select
              sx={{ width: '150px', height: '50px', borderRadius: '20px' }}
              onChange={handleChangeee}
              value={recipeSelects.price}
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
            onChange={handleChangeee}
            value={recipeSelects.category}
            defaultValue=""
          >
            {nutritionCat.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
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
        </Stack>
        <Typography ml="30px">Description</Typography>
        <TextField
          sx={{ borderRadius: '8px', width: ' 80%', ml: '30px' }}
          variant="outlined"
          // onChange={AddIngredients}
          placeholder="Add Description"
          multiline
          rows={5}
          required
          label="Required"
        />

        <Button
          sx={{ border: 'solid', borderWidth: '1.5px', borderRadius: 3 }}
          variant="outlined"
          onClick={AddToChip} /* */
        >
          Add
        </Button>
        {/* </Stack> */}
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
        </Stack>
        <Typography ml="30px">Description</Typography>
        <TextField
          sx={{ borderRadius: '8px', width: ' 80%', ml: '30px' }}
          variant="outlined"
          // onChange={AddIngredients}
          placeholder="Add Description"
          multiline
          rows={5}
          required
          label="Required"
        />
        <button className="submitRecipeButton">Submit Recipe</button>
      </div>
    );
  } else {
    return (
      <>
        {user && (
          <div>
            <h6> Hello </h6>
          </div>
        )}
        :{' '}
        {
          <div>
            <Typography
              sx={{
                fontWeight: '900',
                marginTop: 15,
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              You must login to create a recipe!
            </Typography>
            <>
              <img
                alt="Loading..."
                className="fryingpan"
                width="432"
                height="250"
                data-id="14475354"
                data-animated-url="https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif"
                skip_resize="true"
                srcset="https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 320w,
          https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 400w,
          https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 450w,
          https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 640w,
          https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 700w,
          https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 800w,
          https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 840w,
          https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 1000w,
          https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 1200w,
          https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 768w,
          https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 1600w"
                sizes="(max-width: 919px) 100vw, max(768px, 98vh)"
                src="https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif"
              ></img>
            </>
            <Link href="/api/auth/login" passHref>
              <button variant="outlined" className="fixedLoginButton">
                Login
              </button>
            </Link>
          </div>
        }
      </>
    );
  }
};

export default createRecipe;
