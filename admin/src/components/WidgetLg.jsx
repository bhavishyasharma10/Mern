import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { userRequest } from "../requestMethods";
import { format } from "timeago.js";
const WidgetLgContainer = styled.div`
  flex: 2;
  box-shadow: 9px -1px 27px 11px rgba(223, 242, 245, 0.74);
  padding: 1.25em;
`;
const WidgetLgTitle = styled.h3`
  font-size: 1.2em;
  font-weight: 600;
`;
const WidgetLgTable = styled.table`
  border-spacing: 1.25em;
  width: 100%;
`;
const WidgetLgTr = styled.tr``;
const WidgetLgTh = styled.th`
  text-align: left;
`;
const WidgetLgUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
const WidgetLgName = styled.span``;
const WidgetLgDate = styled.td`
  font-weight: 300;
`;
const WidgetLgAmount = styled.td`
  font-weight: 300;
`;
const WidgetLgStatus = styled.td``;
const WidgetLgButton = styled.button`
  background-color: ${(props) =>
    (props.status === "Approved" && "#e5faf2") ||
    (props.status === "Declined" && "#fff0f1") ||
    (props.status === "Pending" && "#ebf1fe")};
  color: ${(props) =>
    (props.status === "Approved" && "#3bb077") ||
    (props.status === "Declined" && "#d95087") ||
    (props.status === "Pending" && "#2a7ade")};
  border: none;
  border-radius: 0.625em;
  padding: 0.4em 0.6em;

  cursor: pointer;
`;
const Button = ({ type }) => {
  return <WidgetLgButton status={type}>{type}</WidgetLgButton>;
};
const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const res = await userRequest.get("orders/");
      setOrders(res.data);
    };
    getOrders();
  });
  return (
    <WidgetLgContainer>
      <WidgetLgTitle>Latest Transactions</WidgetLgTitle>
      <WidgetLgTable>
        <thead>
          <WidgetLgTr>
            <WidgetLgTh>Customer</WidgetLgTh>
            <WidgetLgTh>Date</WidgetLgTh>
            <WidgetLgTh>Amount</WidgetLgTh>
            <WidgetLgTh>Status</WidgetLgTh>
          </WidgetLgTr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <WidgetLgTr key={order.id}>
              <WidgetLgUser>
                <WidgetLgName>{order.userId}</WidgetLgName>
              </WidgetLgUser>
              <WidgetLgDate>{format(order.createdAt)}</WidgetLgDate>
              <WidgetLgAmount>{order.amount}</WidgetLgAmount>
              <WidgetLgStatus>
                <Button type={order.status} />
              </WidgetLgStatus>
            </WidgetLgTr>
          ))}
        </tbody>
      </WidgetLgTable>
    </WidgetLgContainer>
  );
};

export default WidgetLg;
