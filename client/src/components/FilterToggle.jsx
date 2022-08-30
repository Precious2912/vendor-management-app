import React from "react";
import { useRecoilState } from "recoil";
import { premiumMealsState, regularMealsState } from "../atoms/mealAtom";
import { FilterToggleStyle } from "../styles/FilterToggleStyle";

const FilterToggle = ({ home }) => {
  const [regularActive, setRegularActive] = useRecoilState(regularMealsState);
  const [premiumActive, setPremiumActive] = useRecoilState(premiumMealsState);
  return (
    <FilterToggleStyle>
      {home ? (
        <>
          <p
            className={regularActive ? "active" : ""}
            onClick={() => {
              setRegularActive(true);
              setPremiumActive(false);
            }}
          >
            Regular Meals
          </p>
          <p
            className={premiumActive ? "active" : ""}
            onClick={() => {
              setPremiumActive(true);
              setRegularActive(false);
            }}
          >
            Premium Meals
          </p>
        </>
      ) : (
        ""
      )}
    </FilterToggleStyle>
  );
};

export default FilterToggle;
