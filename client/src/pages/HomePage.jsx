import React from "react";
import DateNow from "../components/DateNow";
import FilterToggle from "../components/FilterToggle";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Meals from "../components/Meals";
import { HomeStyle } from "../styles/HomeStyle";
import { useRecoilValue } from "recoil";
import { premiumMealsState, regularMealsState } from "../atoms/mealAtom";

export const HomePage = () => {
  const regularMeals = useRecoilValue(regularMealsState);
  const premiumMeals = useRecoilValue(premiumMealsState);
  return (
    <HomeStyle>
      <Header />
      <FilterToggle home />
      <DateNow />
      {regularMeals && (
        <>
          <Meals breakfast />
          <Meals lunch />
        </>
      )}
      {premiumMeals && (
        <>
          <Meals premiumBreakfast />
          <Meals premiumLunch />
        </>
      )}
      <Footer />
    </HomeStyle>
  );
};
