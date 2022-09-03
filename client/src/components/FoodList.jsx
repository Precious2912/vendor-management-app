import React, { useRef, useEffect } from "react";
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

const FoodList = () => {
  const foodListActive = useRecoilValue(foodListState);
  const ordersPlacedActive = useRecoilValue(ordersPlacedState);
  const [modalActive, setModalActive] = useRecoilState(modalActiveState);

  const wrapperRef = useRef(null);

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
            <button className="create-a-meal" onClick={() => setModalActive(true)}>
              Create A New Meal
            </button>
          </div>
          <h3>Your Available Meals</h3>
          {modalActive && <Modal />}
        </>
      )}
      {ordersPlacedActive && <h3>Orders Placed</h3>}
      <div className="container">
        <GridContainer>
          {foodListActive && <>{/* <MealCard vendor /> */}</>}
        </GridContainer>
      </div>
    </FoodListStyle>
  );
};

export default FoodList;

// AiFillCloseCircle
