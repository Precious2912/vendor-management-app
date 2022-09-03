import React, { useRef, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { modalActiveState } from "../atoms/vendorAtom";
import { ModalStyle } from "../styles/ModalStyle";
import { useNavigate, Link } from "react-router-dom";
import axios from "../api/axios";

const Modal = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [modalActive, setModalActive] = useRecoilState(modalActiveState);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    category: "",
    premium: "",
    price: "",
    vendorId: user.id,
    dayServed: "",
  });
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("token"));

  const handleCreateMeal = async (e) => {
    try {
      e.preventDefault();
      axios
        .post("/vendors/addFood", formData, {
          method: "POST",
          headers: {
            contentType: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.status === 201) {
            console.log(res);
            setModalActive(false);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

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
    <ModalStyle>
      <div className="modal-content" ref={wrapperRef}>
        <div className="heading">
          <h3>Create Meal</h3>
          <AiOutlineClose
            color={"#cf1919"}
            size={35}
            onClick={() => {
              setModalActive(false);
            }}
            className="close"
          />
        </div>
        <form onSubmit={handleCreateMeal}>
          {/* Name of Meal */}

          <div className="input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value.trim(),
                })
              }
            />
          </div>

          {/* Meal Description */}

          <div className="input">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id=""
              cols="40"
              rows="4"
              required
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target.value.trim(),
                })
              }
            ></textarea>
          </div>

          {/* Meal Image */}

          <div className="input">
            <label htmlFor="name">Image</label>
            <input
              type="text"
              name="image"
              required
              onChange={(e) =>
                setFormData({
                  ...formData,
                  image: e.target.value.trim(),
                })
              }
            />
          </div>

          {/* Meal Category */}
          <div>
            <input
              type="radio"
              name="category"
              value="Regular"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  category: e.target.value,
                })
              }
            />
            <label htmlFor="premium">Breakfast</label>
            <input
              type="radio"
              name="category"
              value="Premium"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  category: e.target.value,
                })
              }
            />
            <label htmlFor="premium">Lunch</label>
          </div>

          {/* Meal Premium status */}

          <div>
            <input
              type="radio"
              name="premium"
              value="Regular"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  premium: Boolean(e.target.value),
                })
              }
            />
            <label htmlFor="premium">Regular</label>
            <input
              type="radio"
              name="premium"
              value="Premium"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  premium: Boolean(e.target.value),
                })
              }
            />
            <label htmlFor="premium">Premium</label>
          </div>
          {/* Meal Price */}

          <div className="input">
            <label htmlFor="name">Price</label>
            <input
              type="number"
              required
              onChange={(e) =>
                setFormData({
                  ...formData,
                  price: e.target.value.trim(),
                })
              }
            />
          </div>

          {/* Day Served */}

          <div>
            <label htmlFor="name">Day Served</label>
            <select name="days" id="days" required 
            onChange={(e) => 
              setFormData({
                ...formData, dayServed: e.target.value})}>
    
              <option value="Monday">Monday</option>
              <option value="Monday">Tuesday</option>
              <option value="Monday">Wednesday</option>
              <option value="Monday">Thursday</option>
              <option value="Monday">Friday</option>
              <option value="Monday">Saturday</option>
              <option value="Monday">Sunday</option> 
            </select>
          </div>

          <div className="action-btns">
            <button
              type="submit"
              className="submit-btn"
              onSubmit={handleCreateMeal}
            >
              Create
            </button>
            <button
              className="cancel-btn"
              onClick={() => {
                setModalActive(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </ModalStyle>
  );
};

export default Modal;
