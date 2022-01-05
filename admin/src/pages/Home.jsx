import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";
import { userRequest } from "../requestMethods";

const HomePage = styled.div`
  flex: 5;
  width: 0;
`;
const HomeWidget = styled.div`
  display: flex;
  margin: 1.25em;
  flex-wrap: wrap;
`;
const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) => {
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], ActiveUser: item.total },
          ]);
        });
      } catch {}
    };
    getStats();
  }, [MONTHS]);
  return (
    <HomePage>
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="ActiveUser"
      />
      <HomeWidget>
        <WidgetSm />
        <WidgetLg />
      </HomeWidget>
    </HomePage>
  );
};
export default Home;
