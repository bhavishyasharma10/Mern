import React from "react";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";

import Badge from "@mui/material/Badge";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
  color: black;
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
  color: black;

  ${mobile({ fontSize: "60%", marginLeft: "10px" })}
`;
const TopAvatar = styled.img`
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  cursor: pointer;
`;
/* -------------------------------- */

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
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
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>My Soul Tonic</Logo>
          </Link>
        </Center>

        <Right>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <MenuItem>Sign In</MenuItem>
          </Link>
          <Link to={"/user/:" + user?._id} style={{ textDecoration: "none" }}>
            <MenuItem>
              <TopAvatar
                src="https://drive.google.com/uc?export=view&id=1IWwq5a5B6xMrxwySD-tNfB8GNNwmk8eR"
                alt=""
              />
            </MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingBagOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
