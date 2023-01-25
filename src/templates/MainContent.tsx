import React from "react";
import Container from "@mui/material/Container";
import { Products } from "../layout/Products";
import { Summary } from "../layout/Summary";

const Main = () => {
  return (
    <Container>
      <Products />
      <Summary />
    </Container>
  );
};

export default Main;
