import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import validation from "../utils/validation";
import { useNavigate, Link } from "react-router-dom";
import { UseAuth } from "../hooks/UseAuth";
import { FormStyle } from "../styles/FormStyle";

const Form = ({
  signIn,
  signup,
  UserLogin,
  UserSignup,
  AdminSignup,
  AdminLogin,
  VendorLogin,
  VendorSignup,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login } = UseAuth();

  // useEffect(() => {
  //   setErrors(validation(formData));
  // }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      if (UserLogin) {
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
      } else if (UserSignup) {
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
      } else if (AdminSignup) {
        // admin signup
      } else if (AdminLogin) {
        // admin login
      } else if (VendorLogin) {
        // vendor login
      } else if (VendorSignup) {
        // vendor signup
      }
    }
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <h2>
        {UserLogin
          ? "Log In"
          : UserSignup
          ? "Sign Up"
          : AdminSignup
          ? "Sign Up as an Admin"
          : AdminLogin
          ? "Login as an Admin"
          : VendorLogin
          ? "Login as a Vendor"
          : "Sign Up as a Vendor"}
      </h2>
      <form onSubmit={handleSubmit}>
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
            placeholder="Email"
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
        <button type="submit" className="action-btn">
          {signup ? "Sign Up" : "Login"}
        </button>
      </form>

      {signup ? (
        <h4>
          Already have an account? Login{" "}
          <Link
            to={
              UserSignup
                ? "/login"
                : AdminSignup
                ? "/admin/login"
                : VendorSignup
                ? "/vendor/login"
                : ""
            }
            className="link"
          >
            HERE
          </Link>
        </h4>
      ) : (
        <h4>
          Don't have an account? Sign Up{" "}
          <Link
            to={
              UserLogin
                ? "/register"
                : AdminLogin
                ? "/admin/register"
                : VendorLogin
                ? "/vendor/register"
                : ""
            }
            className="link"
          >
            HERE{" "}
          </Link>
        </h4>
      )}
    </FormStyle>
  );
};

export default Form;
