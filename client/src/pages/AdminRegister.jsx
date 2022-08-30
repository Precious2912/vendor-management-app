import React from "react";
import Form from "../components/Form";
import Hero from "../components/Hero";
import { HeroStyle } from "../styles/Hero";
import { RegisterBodyStyle } from "../styles/RegisterBody";
import { Container } from "../styles/RegisterStyle";

const AdminRegister = () => {
  return (
    <RegisterBodyStyle>
      <Container>
        <HeroStyle>
          <Hero />
        </HeroStyle>
        <Form AdminSignup signup />
      </Container>
    </RegisterBodyStyle>
  );
};

export default AdminRegister;
