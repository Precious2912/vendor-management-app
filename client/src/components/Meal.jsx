import React from "react";
import { GridContainer } from "../styles/GridContainer";
import { MealStyle } from "../styles/MealStyle";
import MealCard from "./MealCard";

const Meal = ({ breakfast, lunch }) => {
  return (
    <MealStyle>
      <h3>{breakfast ? "Breakfast" : "Lunch"}</h3>
      <GridContainer>
        <MealCard />
        <MealCard />
        <MealCard />
      </GridContainer>
    </MealStyle>
  );
};

export default Meal;
