import React from 'react';

import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img src={image} alt="Recipe"/>
      <ol>
      <h2>Ingredients</h2>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {calories}</p>

    </div>
  );
}

export default Recipe;