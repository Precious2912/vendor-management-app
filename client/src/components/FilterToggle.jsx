import React, { useState } from "react";
import { FilterToggleStyle } from "../styles/FilterToggleStyle";

const FilterToggle = ({ home, admin }) => {
  const [regularActive, setRegularActive] = useState(true);
  const [premiumActive, setPremiumActive] = useState(false);

  const [vendorActive, setVendorActive] = useState(true);
  const [userActive, setUserActive] = useState(false);
  const [commentActive, setCommentActive] = useState(false);
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
