import { atom } from "recoil";

export const userInfoState = atom({
  key: "userInfo",
  default: { regularMeals: true, premiumMeals: false },
});