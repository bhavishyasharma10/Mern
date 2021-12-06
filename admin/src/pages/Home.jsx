import React from "react";
import styled from "styled-components";
import FeaturedInfo from "../components/FeaturedInfo";

const HomePage = styled.div`
  flex: 4;
`;

const Home = () => {
  return (
    <HomePage>
      <FeaturedInfo />
    </HomePage>
  );
};
export default Home;
