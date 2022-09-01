import React from "react";
import { GridContainer } from "../styles/GridContainer";
import { MealStyle } from "../styles/MealStyle";
import MealCard from "./MealCard";

const Meals = ({ breakfast, premiumBreakfast, lunch, premiumLunch }) => {
  return (
    <MealStyle>
      <h3>
        {breakfast || premiumBreakfast ? "Breakfast Choices" : "Lunch Choices"}
      </h3>
      <GridContainer>
        {breakfast &&
          breakfast.map((meal) => (
            <MealCard key={meal.id} meal={meal} breakfast />
          ))}

        {lunch && lunch.map((meal) => <MealCard key={meal.id} meal={meal} />)}

        {premiumBreakfast &&
          premiumBreakfast.map((meal) => (
            <MealCard key={meal.id} meal={meal} breakfast />
          ))}

        {premiumLunch &&
          premiumLunch.map((meal) => <MealCard key={meal.id} meal={meal} />)}
      </GridContainer>
    </MealStyle>
  );
};

export default Meals;
