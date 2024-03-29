import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import Categoryitem from "./Categoryitem";

const Container = styled.div`
  display: flex;
  padding: 0.5em;
  justify-content: space-between;
  background-color: #f5fafd;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Categoryitem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
