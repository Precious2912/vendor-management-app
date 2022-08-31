import { atom } from "recoil";

export const regularMealsState = atom({
  key: "regularMeals",
  default: true,
});

export const premiumMealsState = atom({
  key: "premiumMeals",
  default: false,
});