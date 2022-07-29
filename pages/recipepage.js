import RecipeCard from '../components/RecipeCard';
import RecipeCardIngredients from '../components/RecipeCardIngredients';
import RecipeCardText from '../components/RecipeCardText';
// import { useRouter } from 'next/router';

// const router = useRouter(data);
// const data = router.query;

const RecipePage = ({ data }) => {
  console.log('fromRecipePage', data);
  return (
    <div>
      <h1 className="recipeName"> Recipe Name Here </h1>
      <RecipeCard />
      {/* <RecipeCardIngredients /> */}
      {/* <RecipeCardText /> */}
    </div>
  );
};

export default RecipePage;

/*
1. Finish rendering components
2. Sort positioning/styling 
  - Rebecca links
  - sx - UI docs
3. Rebecca photo
*/
