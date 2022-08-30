import React from "react";
import DateNow from "../components/DateNow";
import FilterToggle from "../components/FilterToggle";
import Header from "../components/Header";
import Meal from "../components/Meal";
import { HomeStyle } from "../styles/HomeStyle";

export const HomePage = () => {
  return (
    <HomeStyle>
      <Header />
      <FilterToggle home />
      <DateNow />
      <Meal breakfast />
      <Meal lunch />
    </HomeStyle>
  );
};
