import React, { useEffect } from "react";
import DateNow from "../components/DateNow";
import FilterToggle from "../components/FilterToggle";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Meals from "../components/Meals";
import { HomeStyle } from "../styles/HomeStyle";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  AllMealsState,
  BreakfastState,
  LunchState,
  premiumBreakfastsState,
  premiumLunchesState,
  premiumMealsState,
  regularMealsState,
  yourOrderStates,
} from "../atoms/mealAtom";
import axios from "../api/axios";

const dayOfTheWeek = new Date().getDay();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const HomePage = () => {
  const regularMeals = useRecoilValue(regularMealsState);
  const premiumMeals = useRecoilValue(premiumMealsState);
  const yourOrders = useRecoilValue(yourOrderStates);
  // eslint-disable-next-line no-unused-vars
  const [allMeals, setAllMeals] = useRecoilState(AllMealsState);
  const [breakfasts, setBreakfasts] = useRecoilState(BreakfastState);
  const [Lunches, setLunches] = useRecoilState(LunchState);

  const [premiumBreakfasts, setPremiumBreakfasts] = useRecoilState(
    premiumBreakfastsState
  );
  const [premiumLunches, setPremiumLunches] =
    useRecoilState(premiumLunchesState);

  useEffect(() => {
    axios.get("/getallfood").then((res) => {
      setAllMeals(res.data.record);
      setBreakfasts(
        res.data.record.filter(
          (meal) =>
            !meal.premium &&
            meal.category === "Breakfast" &&
            meal.dayServed === days[dayOfTheWeek]
        )
      );
      setLunches(
        res.data.record.filter(
          (meal) =>
            !meal.premium &&
            meal.category === "Lunch" &&
            meal.dayServed === days[dayOfTheWeek]
        )
      );
      setPremiumBreakfasts(
        res.data.record.filter(
          (meal) =>
            meal.premium &&
            meal.category === "Breakfast" &&
            meal.dayServed === days[dayOfTheWeek]
        )
      );
      setPremiumLunches(
        res.data.record.filter(
          (meal) =>
            meal.premium &&
            meal.category === "Lunch" &&
            meal.dayServed === days[dayOfTheWeek]
        )
      );
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(allMeals);
  // console.log(premiumLunches);

  return (
    <HomeStyle>
      <Header home />
      <FilterToggle home />
      <DateNow />
      {regularMeals && (
        <>
          <Meals breakfast={breakfasts} />
          <Meals lunch={Lunches} />
        </>
      )}
      {premiumMeals && (
        <>
          <Meals premiumBreakfast={premiumBreakfasts} />
          <Meals premiumLunch={premiumLunches} />
        </>
      )}
      {yourOrders && <p>display orders</p>}
      <Footer />
    </HomeStyle>
  );
};
