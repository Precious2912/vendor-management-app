import React from "react";
import Form from "../components/Form";
import Hero from "../components/Hero";

const LoginPage = () => {
  return (
    <div className="container">
      <Hero />
      <Form loginPage />
    </div>
  );
};

export default LoginPage;
