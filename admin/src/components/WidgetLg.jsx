import React from "react";
import styled from "styled-components";

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
  width: 100%;
  border-spacing: 1.25em;
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
const WidgetLgUserImg = styled.img`
  height: 2.25em;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1em;
`;
const WidgetLgUserName = styled.span``;
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
  return (
    <WidgetLgContainer>
      <WidgetLgTitle>Latest Transactions</WidgetLgTitle>
      <WidgetLgTable>
        <WidgetLgTr>
          <WidgetLgTh>Customer</WidgetLgTh>
          <WidgetLgTh>Date</WidgetLgTh>
          <WidgetLgTh>Amount</WidgetLgTh>
          <WidgetLgTh>Status</WidgetLgTh>
        </WidgetLgTr>

        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgUserImg src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
            <WidgetLgUserName>Susan Carol</WidgetLgUserName>
          </WidgetLgUser>
          <WidgetLgDate>2 Jun 2021</WidgetLgDate>
          <WidgetLgAmount>$122.50</WidgetLgAmount>
          <WidgetLgStatus>
            <Button type="Approved" />
          </WidgetLgStatus>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgUserImg src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
            <WidgetLgUserName>Susan Carol</WidgetLgUserName>
          </WidgetLgUser>
          <WidgetLgDate>2 Jun 2021</WidgetLgDate>
          <WidgetLgAmount>$122.50</WidgetLgAmount>
          <WidgetLgStatus>
            <Button type="Pending" />
          </WidgetLgStatus>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgUserImg src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
            <WidgetLgUserName>Susan Carol</WidgetLgUserName>
          </WidgetLgUser>
          <WidgetLgDate>2 Jun 2021</WidgetLgDate>
          <WidgetLgAmount>$122.50</WidgetLgAmount>
          <WidgetLgStatus>
            <Button type="Approved" />
          </WidgetLgStatus>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgUserImg src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
            <WidgetLgUserName>Susan Carol</WidgetLgUserName>
          </WidgetLgUser>
          <WidgetLgDate>2 Jun 2021</WidgetLgDate>
          <WidgetLgAmount>$122.50</WidgetLgAmount>
          <WidgetLgStatus>
            <Button type="Declined" />
          </WidgetLgStatus>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgUserImg src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
            <WidgetLgUserName>Susan Carol</WidgetLgUserName>
          </WidgetLgUser>
          <WidgetLgDate>2 Jun 2021</WidgetLgDate>
          <WidgetLgAmount>$122.50</WidgetLgAmount>
          <WidgetLgStatus>
            <Button type="Pending" />
          </WidgetLgStatus>
        </WidgetLgTr>
      </WidgetLgTable>
    </WidgetLgContainer>
  );
};

export default WidgetLg;
