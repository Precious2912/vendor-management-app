import React from "react";
import { useRecoilValue } from "recoil";
import { premiumMealsState, regularMealsState } from "../atoms/mealAtom";
import { MealCardStyle } from "../styles/MealCardStyle";

const dateNow = new Date();
const currentHour = dateNow.getHours();

const MealCard = () => {
  const regularMeals = useRecoilValue(regularMealsState);
  const premiumMeals = useRecoilValue(premiumMealsState);

  return (
    <MealCardStyle>
      {regularMeals && (
        <>
          <div className="image-and-select">
            <img
              className="meal-image"
              src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />
            <button
              className="select-btn"
              disabled={currentHour > 9 ? true : false}
            >
              Select
            </button>
          </div>
          <h4>Yam and Egg Sauce</h4>
          <p>Boiled yam and fried eggs with Tomatoes and Onions</p>
        </>
      )}

      {premiumMeals && (
        <>
          <div className="image-and-select">
            <img
              className="meal-image"
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80"
              alt=""
            />
            <button
              className="select-btn"
              disabled={currentHour > 9 ? true : false}
            >
              Select
            </button>
          </div>
          <h4>Yam and Egg Sauce</h4>
          <p>Boiled yam and fried eggs with Tomatoes and Onions</p>
        </>
      )}
    </MealCardStyle>
  );
};

export default MealCard;
