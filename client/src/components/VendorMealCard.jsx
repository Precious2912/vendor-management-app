import React from "react";
import { useNavigate } from "react-router-dom";
import { VendorMealCardStyle } from "../styles/VendorMealCardStyle";

const VendorMealCard = ({ meal }) => {
  const navigate = useNavigate();
  return (
    <VendorMealCardStyle>
      <h3>{meal.name}</h3>
      <img src={meal.image} alt="" className="meal-image" />
      <p className="description">{meal.description}</p>
      <div className="actn">
        <button
          className="btn edit-btn"
          onClick={() => {
            navigate(`/editFood/${meal.id}`);
          }}
        >
          Edit
        </button>
        <button className="btn cancel-btn">Delete</button>
      </div>
      <div className="modal"></div>
    </VendorMealCardStyle>
  );
};

export default VendorMealCard;
