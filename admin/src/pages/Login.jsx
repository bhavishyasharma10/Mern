import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";
const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  width: 100vw;
`;
const LoginWrapper = styled.div`
  padding: 1.25em;
  width: 50%;
  background-color: white;
`;
const LoginInput = styled.input`
  padding: 0.625em;
  margin-bottom: 1em;
  width: 80%;
  height: 1.25em;
`;
const LoginButton = styled.button`
  padding: 0.625em;
  width: 85%;
  border: none;
  border-radius: 0.4em;
  background-color: linen;
  color: black;
  cursor: pointer;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginInput
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <LoginInput
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton onClick={handleClick}>Login</LoginButton>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
