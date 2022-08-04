import { Formik, useFormik } from 'formik';

const createRecipe = () => {
  const formik = useFormik({
    initialValues: {
      cookingTime: '0',
      serves: '0',
      price: '0',
      nutritionCat: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="cookingTime">Cooking Time</label>
      <input
        id="cookingTime"
        name="cookingTime"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.cookingTime}
      />

      <label htmlFor="serves">Serves</label>
      <input
        id="serves"
        name="serves"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.serves}
      />

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.price}
      />

      <label htmlFor="nutritionCat">Nutrition Category</label>
      <input
        id="nutritionCat"
        name="nutritionCat"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.nutritionCat}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default createRecipe;

// import Link from 'next/link';
// import { nanoid } from 'nanoid';

// import { useState } from 'react';

// const createRecipe = () => {
//   const cookingTime = ['15', '25', '35', '45', '60+'];
//   const serves = ['1', '2', '3', '4+'];
//   const price = ['£5', '£10', '£15', '£20+'];
//   const nutritionCat = ['Vegetarian', 'Vegan', 'Pescatarian', 'Keto'];

//   const [ingredientList, setIngredientList] = useState('');
//   const [chipList, setChipList] = useState([]);
//   const [recipeSelects, setRecipeSelects] = useState([
//     { cookingTime: '', serves: '', price: '', category: '' },
//   ]);

//   function handleChangeee(e) {
//     console.info(e.target.value);
//   }

//   function AddIngredients(e) {
//     setIngredientList(e.target.value);
//     console.log(ingredientList);
//   }

//   function AddToChip() {
//     if (ingredientList.length === 0) {
//       return;
//     } else {
//       setChipList([...chipList, { id: nanoid(), label: ingredientList }]);
//       setIngredientList('');
//       console.log(chipList);
//     }
//   }

//   const handleDelete = (id) => {
//     const newList = chipList.filter((item) => item.id !== id);
//     setChipList(newList);
//   };
