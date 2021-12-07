import {
  Home,
  Timeline,
  TrendingUp,
  AccountCircleOutlined,
  ShopOutlined,
  MoneyOutlined,
  BarChart,
  MailOutlined,
  Feedback,
  ChatBubbleOutline,
  WorkOutlined,
  Report,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarClass = styled.div`
  flex: 1;
  height: calc(100vh - 3.125em);
  background-color: lavender;
  position: sticky;
  top: 3.125em;
`;
const SidebarWrapper = styled.div`
  padding: 0.75em;
  color: #555;
`;
const SidebarMenu = styled.div`
  margin-bottom: 0.625em;
`;
const SidebarTitle = styled.h3`
  font-size: 1.25em;
  color: lightslategrey;
`;
const SidebarList = styled.ul`
  list-style: none;
  padding: 0.3125em;
`;
const SidebarListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.3125em;
  cursor: pointer;
  border-radius: 0.3125em;
  &:hover,
  &.active {
    background-color: lavenderblush;
  }
`;
const LinkStyle = {
  textDecoration: "none",
  color: "inherit",
};
const Sidebar = () => {
  return (
    <SidebarClass>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>Dashboard </SidebarTitle>
          <SidebarList>
            <Link to="/" style={LinkStyle}>
              <SidebarListItem active>
                <Home style={{ fontSize: "1.25em", marginRight: "0.25em" }} />
                Home
              </SidebarListItem>
            </Link>
            <SidebarListItem>
              <Timeline style={{ fontSize: "1.25em", marginRight: "0.25em" }} />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <TrendingUp
                style={{ fontSize: "1.25em", marginRight: "0.25em" }}
              />
              Sales
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Quick Menu </SidebarTitle>
          <SidebarList>
            <Link to="/users" style={LinkStyle}>
              <SidebarListItem>
                <AccountCircleOutlined
                  style={{ fontSize: "1.25em", marginRight: "0.25em" }}
                />
                Users
              </SidebarListItem>
            </Link>
            <Link to="/products" style={LinkStyle}>
              <SidebarListItem>
                <ShopOutlined
                  style={{ fontSize: "1.25em", marginRight: "0.25em" }}
                />
                Products
              </SidebarListItem>
            </Link>
            <SidebarListItem>
              <MoneyOutlined
                style={{ fontSize: "1.25em", marginRight: "0.25em" }}
              />
              Transactions
            </SidebarListItem>
            <SidebarListItem>
              <BarChart style={{ fontSize: "1.25em", marginRight: "0.25em" }} />
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Notifications </SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <MailOutlined
                style={{ fontSize: "1.25em", marginRight: "0.25em" }}
              />
              Mail
            </SidebarListItem>
            <SidebarListItem>
              <Feedback style={{ fontSize: "1.25em", marginRight: "0.25em" }} />
              Feedback
            </SidebarListItem>
            <SidebarListItem>
              <ChatBubbleOutline
                style={{ fontSize: "1.25em", marginRight: "0.25em" }}
              />
              Messages
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Staff </SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <WorkOutlined
                style={{ fontSize: "1.25em", marginRight: "0.25em" }}
              />
              Manage
            </SidebarListItem>
            <SidebarListItem>
              <Timeline style={{ fontSize: "1.25em", marginRight: "0.25em" }} />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <Report style={{ fontSize: "1.25em", marginRight: "0.25em" }} />
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarClass>
  );
};

export default Sidebar;
