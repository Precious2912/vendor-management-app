import React from "react";
import { GridContainer } from "../styles/GridContainer";
import { MealStyle } from "../styles/MealStyle";
import MealCard from "./MealCard";

const Meals = ({ breakfast, premiumBreakfast, lunch, premiumLunch }) => {
  return (
    <MealStyle>
      <h3>{breakfast || premiumBreakfast ? "Breakfast" : "Lunch"}</h3>
      <GridContainer>
        <MealCard />
        <MealCard />
        <MealCard />
      </GridContainer>
    </MealStyle>
  );
};

export default Meals;
