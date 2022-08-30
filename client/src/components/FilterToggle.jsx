import React from "react";
import { useRecoilState } from "recoil";
import { commentsState, userState, vendorsState } from "../atoms/adminAtom";
import { premiumMealsState, regularMealsState } from "../atoms/mealAtom";
import { FilterToggleStyle } from "../styles/FilterToggleStyle";


const FilterToggle = ({ home, admin }) => {
  const [regularActive, setRegularActive] = useRecoilState(regularMealsState);
  const [premiumActive, setPremiumActive] = useRecoilState(premiumMealsState);
  const [vendorActive, setVendorActive] = useRecoilState(vendorsState);
  const [userActive, setUserActive] = useRecoilState(userState);
  const [commentActive, setCommentActive] = useRecoilState(commentsState);
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
      ) : admin ? (
        <>
<p
  className={vendorActive ? "active" : ""}
  onClick={() => {
    setVendorActive(true);
    setUserActive(false);
    setCommentActive(false);
  }}
>
  Vendors
</p>
<p
  className={userActive ? "active" : ""}
  onClick={() => {
    setUserActive(true);
    setVendorActive(false);
    setCommentActive(false);
  }}
>
  Users
</p>
<p
  className={commentActive ? "active" : ""}
  onClick={() => {
    setCommentActive(true);
    setUserActive(false);
    setVendorActive(false);
  }}
>
  Comments
</p>
</>
      ) : ""}
    </FilterToggleStyle>
  );
};

export default FilterToggle;