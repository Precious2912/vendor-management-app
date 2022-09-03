import React, { useRef, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  foodListState,
  modalActiveState,
  ordersPlacedState,
} from "../atoms/vendorAtom";
import { FoodListStyle } from "../styles/FoodListStyle";
import { GridContainer } from "../styles/GridContainer";
import MealCard from "./MealCard";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "./Modal";
import axios from "../api/axios";
import VendorMealCard from "./VendorMealCard";

const FoodList = () => {
  const vendor = JSON.parse(localStorage.getItem("user"));

  // console.log(vendor.id);

  const foodListActive = useRecoilValue(foodListState);
  const ordersPlacedActive = useRecoilValue(ordersPlacedState);
  const [modalActive, setModalActive] = useRecoilState(modalActiveState);
  const [vendorDetails, setVendorDetails] = useState("");
  const [vendorFood, setVendorFood] = useState([]);

  // console.log(vendorFood.map((food) => food.name));
  const wrapperRef = useRef(null);

  useEffect(() => {
    axios
      .get(`vendors/getAllVendorDetails/${vendor.id}`)
      .then((res) => {
        setVendorDetails(res.data.record);
        setVendorFood(res.data.record.menu);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setModalActive(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);

  return (
    <FoodListStyle>
      {foodListActive && (
        <>
          <div className="actions">
            <button
              className="create-a-meal"
              onClick={() => setModalActive(true)}
            >
              Create A New Meal
            </button>
          </div>
          <h3>Your Available Meals</h3>
          {modalActive && <Modal />}
        </>
      )}
      {ordersPlacedActive && <h3>Orders Placed</h3>}
      <div className="container">
        <GridContainer vendor>
          {vendorFood.map((food) => (
            <VendorMealCard key={food.id} meal={food} />
          ))}
        </GridContainer>
      </div>
    </FoodListStyle>
  );
};

export default FoodList;

// AiFillCloseCircle
// /getAllVendorDetails/:id
