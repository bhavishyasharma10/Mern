import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { userRequest } from "../requestMethods";

const Featured = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 0.625em;
`;
const FeaturedItem = styled.div`
  flex: 1;
  margin: 0em 1.25em;
  padding: 0.75em;
  border-radius: 0.625em;
  cursor: pointer;
  box-shadow: 9px -1px 27px 11px rgba(223, 242, 245, 0.74);
`;

const FeaturedTitle = styled.span`
  font-size: 1.25em;
`;

const FeaturedMoneyContainer = styled.div`
  margin: 0.625em 0em;
  display: flex;
  align-items: center;
`;
const FeaturedMoney = styled.span`
  font-size: 1.875em;
  font-weight: 600;
`;
const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 1.2em;
`;
const FeaturedIcon = styled.div`
  color: ${(props) =>
    (props.type === "negative" && "red") ||
    (props.type === "positive" && "green")};
`;

const FeaturedSub = styled.span`
  font-size: 0.625em;
  color: gray;
`;

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc(
          ((res.data[0].total - res.data[1].total) / res.data[1].total) * 100.0
        );
      } catch {}
    };

    getIncome();
  }, []);
  console.log(income);
  return (
    <Featured>
      <FeaturedItem>
        <FeaturedTitle>Revenue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$ {income[0]?.total}</FeaturedMoney>
          <FeaturedMoneyRate>
            {Math.floor(perc)}%
            {perc < 0 ? (
              <FeaturedIcon type="negative">
                <ArrowDownward style={{ fontSize: "0.75em" }} />
              </FeaturedIcon>
            ) : (
              <FeaturedIcon type="positive">
                <ArrowUpward style={{ fontSize: "0.75em" }} />
              </FeaturedIcon>
            )}
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>

      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$115</FeaturedMoney>
          <FeaturedMoneyRate>
            -1.4
            <FeaturedIcon type="negative">
              <ArrowDownward style={{ fontSize: "0.75em" }} />
            </FeaturedIcon>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>

      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$225</FeaturedMoney>
          <FeaturedMoneyRate>
            +2.49
            <FeaturedIcon type="positive">
              <ArrowUpward style={{ fontSize: "0.75em" }} />
            </FeaturedIcon>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
    </Featured>
  );
};
export default FeaturedInfo;
