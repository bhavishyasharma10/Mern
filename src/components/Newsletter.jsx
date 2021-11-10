import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ fontSize: "2em", height: "40vh" })}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "80%" })}
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ fontSize: "50%", textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fdf4e3;
  justify-content: space-between;
  display: flex;
  border: 1px solid lightslategray;
  ${mobile({ fontSize: "50%", height: "2em", width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 9;
  padding-left: 20px;
  ${mobile({ paddingLeft: "1rem" })}
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #00fd163b;
  color: #051a8d; ;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
