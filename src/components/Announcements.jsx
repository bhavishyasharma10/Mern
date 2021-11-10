import styled from "styled-components";
import React from "react";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: #ded9bf;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ height: "1rem", fontSize: "0.5em" })}
`;

const Announcements = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcements;
