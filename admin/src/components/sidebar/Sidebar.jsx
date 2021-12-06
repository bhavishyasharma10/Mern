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

const Sidebar = () => {
  return (
    <SidebarClass>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>Dashboard </SidebarTitle>
          <SidebarList>
            <SidebarListItem active>
              <Home />
              Home
            </SidebarListItem>
            <SidebarListItem>
              <Timeline />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <TrendingUp />
              Sales
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Quick Menu </SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <AccountCircleOutlined />
              Users
            </SidebarListItem>
            <SidebarListItem>
              <ShopOutlined />
              Products
            </SidebarListItem>
            <SidebarListItem>
              <MoneyOutlined />
              Transactions
            </SidebarListItem>
            <SidebarListItem>
              <BarChart />
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Notifications </SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <MailOutlined />
              Mail
            </SidebarListItem>
            <SidebarListItem>
              <Feedback />
              Feedback
            </SidebarListItem>
            <SidebarListItem>
              <ChatBubbleOutline />
              Messages
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Staff </SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <WorkOutlined />
              Manage
            </SidebarListItem>
            <SidebarListItem>
              <Timeline />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <Report />
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarClass>
  );
};

export default Sidebar;
