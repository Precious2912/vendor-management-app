import React, { useState } from "react";
import { FilterToggleStyle } from "../styles/FilterToggleStyle";

const FilterToggle = ({ home }) => {
  const [regularActive, setRegularActive] = useState(true);
  const [premiumActive, setPremiumActive] = useState(false);
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
