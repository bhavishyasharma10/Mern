import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';

import Badge from '@mui/material/Badge';
import { ShoppingBagOutlined } from '@mui/icons-material';

/* ------ Styled Components ------- */

const Container = styled.div`
    height: 60px;
`;
const Wrapper =styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-item: center;
`;

// Left Side
const Left = styled.div`
    display: flex;
    align-items: center;
    flex:1;
`;
const Language = styled.div`
    font-size: 12px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

// Center Side
const Center = styled.div`
    flex:1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
`;

//Right Side 
const Right = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    jsutify-content: flex-end;
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: poiner;
    margin-left: 25px;
`;



/* -------------------------------- */

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color:"grey",fontSize:16}}/>
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
                            <ShoppingBagOutlined/>
                        </Badge>
                    </MenuItem>

                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar