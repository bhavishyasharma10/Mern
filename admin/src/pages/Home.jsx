import React from "react";
import styled from "styled-components";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import { userData } from "../dummyData";

const HomePage = styled.div`
  flex: 5;
`;
const HomeWidget = styled.div`
  display: flex;
  margin: 1.25em;
`;
const Home = () => {
  return (
    <HomePage>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="ActiveUser" />
      <HomeWidget></HomeWidget>
    </HomePage>
  );
};
export default Home;
