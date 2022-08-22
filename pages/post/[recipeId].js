import { Navbar } from '../../components/navbar.js';
import RecipeCards from '../../components/recipepage';
import { Box } from '@mui/material';

const Post = ({ data }) => {
  const separatedingredients = data.payload[0].ingredients.split(',');
  const arrWithColor = data.payload.map((object) => {
    return { ...object, userName: 'red' };
  });
  console.log(arrWithColor);

  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url(/illustration.png)',
          minHeight: '100vh',
          paddingBottom: {
            xs: '0',
            sm: '40px',
            md: '40px',
          },
        }}
      >
        <Navbar />
        <RecipeCards
          recipedata={data.payload}
          separatedingredients={separatedingredients}
        />
      </Box>
    </>
  );
};
export default Post;

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://craveaway.herokuapp.com/recipes/${context.params.recipeId}`
  );
  const data = await response.json();
  console.log(data);

  if (!data.payload.length) {
    return { notFound: true };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
