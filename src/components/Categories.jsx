import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import Categoryitem from "./Categoryitem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  background-color: #ffe8ff;
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
