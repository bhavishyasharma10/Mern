import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: lightgray;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0 ;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
`;

const Wrapper = styled.div`
    display:flex;
    height: 100%;
`;
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`;
const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;
const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    return (
        <Container>

            <Arrow direction="left">
                <ArrowLeftOutlined />
            </Arrow>

            <Wrapper>

                <Slide>
                    <ImageContainer>
                        <Image src="https://images.unsplash.com/photo-1586079615844-c0abfb04dc79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
                    </ImageContainer>

                    <InfoContainer>
                        <Title>SUMMER SALE!!</Title>
                        <Desc>DON'T COMPROSMISE ON STYLE, GET FLAT 40% OFF</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>

                <Slide>
                    <ImageContainer>
                        <Image src="https://images.unsplash.com/photo-1586079615844-c0abfb04dc79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
                    </ImageContainer>

                    <InfoContainer>
                        <Title>WINTER SALE!!</Title>
                        <Desc>DON'T COMPROSMISE ON STYLE, GET FLAT 40% OFF</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>

                <Slide>
                    <ImageContainer>
                        <Image src="https://images.unsplash.com/photo-1586079615844-c0abfb04dc79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
                    </ImageContainer>

                    <InfoContainer>
                        <Title>MONSOON SALE!!</Title>
                        <Desc>DON'T COMPROSMISE ON STYLE, GET FLAT 40% OFF</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>

            </Wrapper>

            <Arrow direction="right">
                <ArrowRightOutlined />
            </Arrow>

        </Container>
    )
}

export default Slider
