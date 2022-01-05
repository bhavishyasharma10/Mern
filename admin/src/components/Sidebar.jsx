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
  flex: ${(props) => (props.show === "Off" ? "0" : "1")};

  height: calc(100vh - 3.125em);
  background-color: lavender;
  position: sticky;
  top: 3.125em;
`;

const SidebarWrapper = styled.div`
  padding: 0.75em;
  color: #555;
  display: ${(props) => (props.show === "Off" ? "none" : "")};
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
const IconStyle = {
  fontSize: "1.25em",
  marginRight: "0.25em",
};
const Sidebar = ({ visibility }) => {
  return (
    <SidebarClass show={visibility}>
      <SidebarWrapper show={visibility}>
        <SidebarMenu>
          <SidebarTitle>Dashboard </SidebarTitle>
          <SidebarList>
            <Link to="/" style={LinkStyle}>
              <SidebarListItem active>
                <Home style={IconStyle} />
                Home
              </SidebarListItem>
            </Link>
            <SidebarListItem>
              <Timeline style={IconStyle} />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <TrendingUp style={IconStyle} />
              Sales
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Quick Menu </SidebarTitle>
          <SidebarList>
            <Link to="/users" style={LinkStyle}>
              <SidebarListItem>
                <AccountCircleOutlined style={IconStyle} />
                Users
              </SidebarListItem>
            </Link>
            <Link to="/products" style={LinkStyle}>
              <SidebarListItem>
                <ShopOutlined style={IconStyle} />
                Products
              </SidebarListItem>
            </Link>
            <SidebarListItem>
              <MoneyOutlined style={IconStyle} />
              Transactions
            </SidebarListItem>
            <SidebarListItem>
              <BarChart style={IconStyle} />
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Notifications </SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <MailOutlined style={IconStyle} />
              Mail
            </SidebarListItem>
            <SidebarListItem>
              <Feedback style={IconStyle} />
              Feedback
            </SidebarListItem>
            <SidebarListItem>
              <ChatBubbleOutline style={IconStyle} />
              Messages
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Staff </SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <WorkOutlined style={IconStyle} />
              Manage
            </SidebarListItem>
            <SidebarListItem>
              <Timeline style={IconStyle} />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <Report style={IconStyle} />
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarClass>
  );
};

export default Sidebar;
