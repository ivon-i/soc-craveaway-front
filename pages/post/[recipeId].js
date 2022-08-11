// import RecipeCards from '../recipe';
import { Navbar } from '../../ThemeFolder/Navbar';
import RecipeCards from '../../ThemeFolder/recipepage';
import { Box } from '@mui/material';
import { useUser } from '@auth0/nextjs-auth0';

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
export default Post; // default export for the page and simple export for the server side function below

export async function getServerSideProps(context) {
  // simple export
  const response = await fetch(
    `http://craveaway.herokuapp.com/recipes/${context.params.recipeId}`
  );
  const data = await response.json();
  console.log(data);

  if (!data.payload.length) {
    return { notFound: true }; // can also re-direct to homepage or other
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
