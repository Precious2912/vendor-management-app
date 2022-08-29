import React, { useState } from "react";
import axios from "../api/axios";
import validation from "../utils/validation";
import { useNavigate } from "react-router-dom";
import { UseAuth } from "../hooks/UseAuth";

const Form = ({ loginPage, signup }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  // console.log(UseAuth());
  const { login } = UseAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(formData));
    if (Object.keys(errors).length === 0) {
      if (loginPage) {
        axios
          .post("/users/login", {
            email: formData.email,
            password: formData.password,
          })
          .then((res) => {
            if (res.status === 200) {
              console.log(res);
              login(res.data.fullName, res.data.id, res.data.token);
              navigate("/");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        axios
          .post("/users/register", formData)
          .then((res) => {
            if (res.status === 200) {
              console.log(res);
              navigate("/login");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  return (
    <div className="main">
      <h2>{loginPage ? "Log In" : "Sign Up"}</h2>
      <form action="">
        {signup && (
          <div>
            <label htmlFor="fullName"></label>
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  fullName: e.target.value.trim(),
                })
              }
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>
        )}

        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value.trim(),
              })
            }
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        {signup && (
          <div>
            <label htmlFor="phoneNumber"></label>
            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phoneNumber: e.target.value.trim(),
                })
              }
            />
            {errors.phoneNumber && (
              <p className="error">{errors.phoneNumber}</p>
            )}
          </div>
        )}
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        {signup && (
          <div>
            <label htmlFor="confirmPassword"></label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  confirm_password: e.target.value,
                })
              }
            />
            {errors.confirm_password && (
              <p className="error">{errors.confirm_password}</p>
            )}
          </div>
        )}
      </form>
      <button type="submit" className="action-btn" onClick={handleSubmit}>
        {signup ? "Sign Up" : "Login"}
      </button>
    </div>
  );
};

export default Form;
