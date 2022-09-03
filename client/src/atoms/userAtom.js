import { atom } from "recoil";

export const userOrderState = atom({
  key: "userOrder",
  default: [],
});


export const userInfoState = atom({
  key: "userInfo",
  default: {}
})