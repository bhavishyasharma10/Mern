import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
    height: 30px;
    background-color: #ded9bf ;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
  
`;

const Announcements = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over $50
        </Container>
    )
}

export default Announcements
