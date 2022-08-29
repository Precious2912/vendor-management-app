import React from "react";
import Hero from "../components/Hero";
import "../styles/register.css";
import Form from "../components/Form";
export const RegisterPage = () => {
  return (
    <div className="container">
      <Hero />
      <Form signup />
    </div>
  );
};
