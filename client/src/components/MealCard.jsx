import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { premiumMealsState, regularMealsState } from "../atoms/mealAtom";
import { userOrderState } from "../atoms/userAtom";
import { MealCardStyle } from "../styles/MealCardStyle";
import { useNavigate } from "react-router-dom";

const currentHour = new Date().getHours();

const MealCard = ({ meal, breakfast, vendorPage }) => {
  const regularMeals = useRecoilValue(regularMealsState);
  const premiumMeals = useRecoilValue(premiumMealsState);
  const [userOrders, setUserOrders] = useRecoilState(userOrderState);

  const navigate = useNavigate();

  // console.log(userOrders);
  return (
    <MealCardStyle>
      {regularMeals && (
        <div
          className="mealCard"
          onClick={() => {
            if (!vendorPage) {
              navigate(`/product/${meal.id}`);
            }
          }}
        >
          <div className="image-and-select">
            <img
              className="meal-image"
              src={meal.image}
              alt={meal.description}
            />

            <button
              className="select-btn"
              disabled={
                breakfast
                  ? currentHour > 9 && currentHour < 14
                    ? true
                    : false
                  : currentHour > 9 && currentHour < 14
                  ? false
                  : true
              }
              onClick={() => {
                setUserOrders([meal]);
              }}
            >
              Select
            </button>
          </div>
          <h4>{meal.name}</h4>
          <p>{meal.description}</p>
        </div>
      )}

      {premiumMeals && (
        <>
          <div
            className="mealCard"
            onClick={() => {
              navigate(`/product/${meal.id}`);
            }}
          >
            <div className="image-and-select">
              <img
                className="meal-image"
                src={meal.image}
                alt={meal.description}
              />
              <button
                className="select-btn"
                disabled={
                  breakfast
                    ? currentHour > 9 && currentHour < 14
                      ? true
                      : false
                    : currentHour > 9 && currentHour < 14
                    ? false
                    : true
                }
                onClick={() => {
                  setUserOrders([meal]);
                }}
              >
                Pay for Meal
              </button>
            </div>
            <div className="name-and-price">
              <h4>{meal.name}</h4>
              <p className="price">₦{meal.price}</p>
            </div>
            <p className="description">{meal.description}</p>
          </div>
        </>
      )}
    </MealCardStyle>
  );
};

export default MealCard;
