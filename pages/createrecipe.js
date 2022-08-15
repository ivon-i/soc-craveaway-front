import Link from 'next/link';
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
  Container,
  Grid,
  Paper,
  Alert,
  Dialog,
} from '@mui/material';
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useUser } from '@auth0/nextjs-auth0';
import { Navbar } from '../ThemeFolder/Navbar';
export default function createRecipe() {
  const cookingTime = [
    '10-20 mins',
    '21-30 mins',
    '31-40 mins',
    '41-50 mins',
    '51-60 mins',
    '60+ mins',
  ];
  const serves = ['1', '2', '3', '4+'];
  const price = ['£5-15', '£16-25', '£26-35', '£36-45', '£45+'];
  const nutritionCat = [
    'Vegetarian',
    'Vegan',
    'Pescetarian',
    'Keto',
    'Gluten-free',
    'Low-sugar',
    'Dairy-free',
    'Low-sodium',
    'Low-carb',
  ];
  const { user } = useUser();
  const newRecipe = {
    title: '',
    author: '',
    description: '',
    time: '',
    cost: '',
    nutrition: '',
    ingredients: '',
    image: 'hi',
    serves: '',
    imagestring: '',
  };
  const [newRecipeSubmission, setNewRecipeSubmission] = useState(newRecipe);
  const [newImage, setNewImage] = useState('');
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [previewSource, setPreviewSource] = useState();
  // This function takes datapoints as a paramater and assigns target value as key value pairs of an object held in state to create a new recipe.
  const handleChangeFor = (propertyName) => (e) => {
    setNewRecipeSubmission((newRecipeSubmission) => ({
      ...newRecipeSubmission,
      [propertyName]: e.target.value,
      ['author']: `${user.name}`,
    }));
  };
  // This function allows the user to post their recipe to the database
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
    console.log(data);
  };
  // This function allows the user to upload an image from their computer. The image is read and assigned a url string which can be stored in an object.
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
      setNewRecipeSubmission((newRecipeSubmission) => ({
        ...newRecipeSubmission,
        ['imagestring']: reader.result,
      }));
    };
  };
  function handleClose() {
    setOpen(!open);
  }
  // This function checks if a user has entered a value for the requested datapoints that enable enable them to submit a recipe and allows them to submit the recipe once all requested values have been entered
  const updateImageString = () => {
    if (
      newRecipeSubmission.title === newRecipe.title ||
      newRecipeSubmission.author === newRecipe.author ||
      newRecipeSubmission.description === newRecipe.description ||
      newRecipeSubmission.time === newRecipe.time ||
      newRecipeSubmission.cost === newRecipe.cost ||
      newRecipeSubmission.nutrition === newRecipe.nutrition ||
      newRecipeSubmission.ingredients === newRecipe.ingredients ||
      newRecipeSubmission.serves === newRecipe.serves ||
      newRecipeSubmission.imagestring === newRecipe.imagestring
    ) {
      setSuccess(false);
      setOpen(true);
    } else {
      setPreviewSource('');
      handleClick(previewSource);
      setNewRecipeSubmission(newRecipe);
      setSuccess(true);
      setOpen(true);
    }
  };
  if (user) {
    return (
      <div>
        <Box
          sx={{
            backgroundImage: 'url(/food_illustration.png)',
            minHeight: '100vh',
            paddingBottom: {
              xs: '0',
              sm: '40px',
              md: '40px',
            },
          }}
        >
          <Navbar />
          {/* TITLE */}
          <Container
            maxWidth="sm"
            component={Paper}
            sx={{
              marginTop: '40px',
              padding: '24px 24px 24px 24px',
              borderRadius: '8px',
            }}
          >
            <Box>
              <Typography
                component="h1"
                variant="h2"
                sx={{ fontWeight: '700', fontSize: '39px' }}
              >
                Create your recipe
              </Typography>
              <Typography sx={{ mb: 1, mt: 4 }}>Recipe Name:</Typography>
              <TextField
                sx={{
                  backgroundColor: '',
                  '& > label': { opacity: '70   %' },
                  '& div': { borderRadius: '8px' },
                }}
                variant="outlined"
                value={newRecipeSubmission.title}
                onChange={handleChangeFor('title')}
                placeholder="Add Name"
                multiline
                rows={1}
                required
                label="Required"
                fullWidth
              />
              {/* IMAGE */}
              <Box
                sx={{
                  ml: '5px',
                  height: '150px',
                  mt: '24px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '0.5px solid rgba(0,0,0,0.5)',
                  borderRadius: '8px',
                  backgroundImage: `url(${previewSource})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              ></Box>
              <Button
                variant="contained"
                component="label"
                sx={{
                  marginTop: '8px',
                  marginBottom: '24px',
                  marginLeft: '4px',
                }}
              >
                + Upload Image
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  value={newImage}
                />
              </Button>
              {/* COOKING TIME */}
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <Typography sx={{ mb: 1, mt: 2 }}>Cooking Time: </Typography>
                  <Select
                    sx={{
                      height: '50px',
                      borderRadius: '8px',
                      '& > div': {
                        opacity: '70%',
                      },
                    }}
                    value={newRecipeSubmission.time}
                    onChange={handleChangeFor('time')}
                    defaultValue=""
                    displayEmpty
                    labelId="select-label"
                    label="Required"
                    renderValue={(value) =>
                      value !== '' ? value : 'Required*'
                    }
                    fullWidth
                  >
                    {cookingTime.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </Grid>
                {/* SERVES */}
                <Grid item sm={6} xs={12}>
                  <Typography sx={{ mb: 1, mt: 2 }}>Serves: </Typography>
                  <Select
                    sx={{
                      height: '50px',
                      borderRadius: '8px',
                      '& > div': { opacity: '70%' },
                    }}
                    value={newRecipeSubmission.serves}
                    onChange={handleChangeFor('serves')}
                    defaultValue=""
                    displayEmpty
                    renderValue={(value) =>
                      value !== '' ? value : 'Required*'
                    }
                    fullWidth
                  >
                    {serves.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </Grid>
                {/* NUTRITION CATEGORY */}
                <Grid item sm={6} xs={12}>
                  <Typography sx={{ mb: 1, mt: 2 }} d>
                    Nutrition category:{' '}
                  </Typography>
                  <Select
                    sx={{
                      height: '50px',
                      borderRadius: '8px',
                      '&  > div': { opacity: '70%' },
                    }}
                    value={newRecipeSubmission.nutrition}
                    onChange={handleChangeFor('nutrition')}
                    displayEmpty
                    defaultValue=""
                    renderValue={(value) =>
                      value !== '' ? value : 'Required*'
                    }
                    fullWidth
                  >
                    {nutritionCat.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </Grid>
                {/* PRICE PER SERVING */}
                <Grid item sm={6} xs={12}>
                  <Typography sx={{ mb: 1, mt: 2 }}>Price: </Typography>
                  <Select
                    sx={{
                      height: '50px',
                      borderRadius: '8px',
                      '& > div': { opacity: '70%' },
                    }}
                    value={newRecipeSubmission.cost}
                    onChange={handleChangeFor('cost')}
                    displayEmpty
                    defaultValue=""
                    renderValue={(value) =>
                      value !== '' ? value : 'Required*'
                    }
                    fullWidth
                  >
                    {price.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              {/* INGREDIENTS */}
              <Typography sx={{ mt: 2, mb: 1 }}>Ingredients</Typography>
              <TextField
                sx={{ borderRadius: '8px', '& > label': { opacity: '70%' } }}
                variant="outlined"
                value={newRecipeSubmission.ingredients}
                onChange={handleChangeFor('ingredients')}
                placeholder="Add Ingredients"
                multiline
                rows={5}
                required
                label="Required"
                fullWidth
              />
              {/* DESCRIPTION */}
              <Typography sx={{ mb: 1, mt: 2 }}>Description</Typography>
              <TextField
                sx={{ borderRadius: '8px', '& > label': { opacity: '70%' } }}
                variant="outlined"
                value={newRecipeSubmission.description}
                onChange={handleChangeFor('description')}
                placeholder="Add Description"
                multiline
                rows={5}
                required
                label="Required"
                fullWidth
              />
              <Button
                size="large"
                variant="contained"
                className="submitRecipeButton"
                onClick={updateImageString}
                sx={{
                  borderRadius: '40px',
                  marginTop: '40px',
                  width: {
                    xs: '100%',
                    md: 'auto',
                  },
                }}
              >
                <SendIcon
                  sx={{ width: '16px', height: '16px', opacity: '75%' }}
                />
                <Typography
                  sx={{
                    fontWeight: '600',
                    marginLeft: '8px',
                    textTransform: 'none',
                  }}
                >
                  Submit recipe
                </Typography>
              </Button>
              <Dialog open={open} onClose={handleClose}>
                {success ? (
                  <Alert onClose={handleClose}>
                    Thank you! Your recipe has been submitted!
                  </Alert>
                ) : (
                  <Alert severity="error" onClose={handleClose}>
                    You must fill out all the recipe information!
                  </Alert>
                )}
              </Dialog>
            </Box>
          </Container>
        </Box>
      </div>
    );
  } else {
    return (
      <>
        <Navbar />
        <Box
          sx={{
            backgroundImage: 'url(/food_illustration.png)',
            minHeight: '100vh',
            paddingBottom: {
              xs: '0',
              sm: '40px',
              md: '40px',
            },
          }}
        >
          <Container maxWidth="xs" position="relative">
            <Paper
              sx={{
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '16px',
                backgroundColor: '#fdfdfd',
              }}
            >
              <Typography
                variant="h6"
                sx={{ textAlign: 'center', fontWeight: '600' }}
              >
                You must login to create a recipe!
              </Typography>
              <img
                alt="Loading..."
                className="fryingpan"
                width="220"
                height="220"
                data-id="14475354"
                data-animated-url="https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif"
                skip_resize="false"
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
              />
              <Link href="/api/auth/login" passHref>
                <Button
                  variant="contained"
                  size="large"
                  className="fixedLoginButton"
                  sx={{
                    fontWeight: '600',
                    marginTop: '32px',
                  }}
                >
                  Login
                </Button>
              </Link>
            </Paper>
          </Container>
        </Box>
      </>
    );
  }
}
