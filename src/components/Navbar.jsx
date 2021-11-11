import React from "react";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";

import Badge from "@mui/material/Badge";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { mobile } from "../responsive";

/* ------ Styled Components ------- */

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  ${mobile({ padding: "10px 0px", justifyContent: "space-around" })}

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Left Side
const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Language = styled.div`
  font-size: 12px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  ${mobile({ marginLeft: "10px" })}
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "100%", fontSize: "60%" })}
`;

// Center Side
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 1.5em;
  font-family: "Tangerine";
  text-shadow: 4px 4px 4px #aaa;
  ${mobile({ width: "100", fontSize: "0.90em" })};
`;

//Right Side
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", paddingRight: "10px" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: poiner;
  margin-left: 25px;
  ${mobile({ fontSize: "60%", marginLeft: "10px" })}
`;

/* -------------------------------- */

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>My Soul Tonic</Logo>
        </Center>

        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingBagOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
