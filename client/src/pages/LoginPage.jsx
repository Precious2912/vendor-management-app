import React from "react";
import Form from "../components/Form";
import Hero from "../components/Hero";
import { HeroStyle } from "../styles/Hero";
import { RegisterBodyStyle } from "../styles/RegisterBody";
import { Container } from "../styles/RegisterStyle";

const LoginPage = () => {
  return (
    <RegisterBodyStyle>
      <Container>
        <HeroStyle>
          <Hero />
        </HeroStyle>
        <Form UserLogin signIn />
      </Container>
    </RegisterBodyStyle>
  );
};

export default LoginPage;
