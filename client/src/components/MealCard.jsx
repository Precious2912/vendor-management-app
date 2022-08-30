import React from "react";
import { MealCardStyle } from "../styles/MealCardStyle";

const dateNow = new Date();

const MealCard = () => {
  return (
    <MealCardStyle>
      <div className="image-and-select">
        <img
          className="meal-image"
          src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
        />
        <button className="select-btn">Select</button>
      </div>
      <h4>Yam and Egg Sauce</h4>
      <p>Boiled yam and fried eggs with Tomatoes and Onions</p>
    </MealCardStyle>
  );
};

export default MealCard;
