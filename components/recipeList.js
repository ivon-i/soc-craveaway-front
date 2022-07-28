import { Stack } from '@mui/material';
import RecCard from './recCard';
import data from '../db/recipeData';

export default function RecipeList() {
  return (
    <div>
      <Stack direction="row" overflow="auto">
        {data.map((item) => {
          return <RecCard data={item} />;
        })}
      </Stack>
    </div>
  );
}
