import React from "react";
import Form from "../components/Form";
import Hero from "../components/Hero";
import { HeroStyle } from "../styles/Hero";
import { RegisterBodyStyle } from "../styles/RegisterBody";
import { Container } from "../styles/RegisterStyle";

const VendorLogin = () => {
  return (
    <RegisterBodyStyle>
      <Container>
        <HeroStyle>
          <Hero />
        </HeroStyle>
        <Form VendorLogin signIn />
      </Container>
    </RegisterBodyStyle>
  );
};

export default VendorLogin;
