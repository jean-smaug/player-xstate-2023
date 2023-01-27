import { Container } from "@chakra-ui/react";
import React from "react";
import splashscreen from "../assets/Logo-LFT-Black-16_9.png";

const Splashscreen = () => {
  return (
    <Container>
      <img src={splashscreen} alt="" />
    </Container>
  );
};

export default Splashscreen;
