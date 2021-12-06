import React from "react";
import styled from "styled-components";
import { NotificationsNoneTwoTone, Settings } from "@material-ui/icons";

const TopbarClass = styled.div`
  width: 100%;
  height: 3.125em;
  background-color: slateblue;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const TopbarWrapper = styled.div`
  height: 100%;
  padding: 0em 1.25em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopLeft = styled.div``;
const Logo = styled.span`
  font-weight: bold;
  font-size: 1.5em;
  color: aliceblue;
  cursor: pointer;
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
`;
const TopBarIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 0.625em;
  color: #00000099;
`;
const TopIconBadge = styled.span`
  width: 1.2em;
  height: 1.5em;
  position: absolute;
  top: -0.6em;
  right: -0.55em;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.625em;
`;
const TopAvatar = styled.img`
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  cursor: pointer;
`;
const Topbar = () => {
  return (
    <TopbarClass>
      <TopbarWrapper>
        <TopLeft>
          <Logo>Admin Panel</Logo>
        </TopLeft>
        <TopRight>
          <TopBarIconContainer>
            <NotificationsNoneTwoTone />
            <TopIconBadge>2</TopIconBadge>
          </TopBarIconContainer>
          <TopBarIconContainer>
            <Settings />
          </TopBarIconContainer>
          <TopAvatar
            src="https://drive.google.com/uc?export=view&id=1IWwq5a5B6xMrxwySD-tNfB8GNNwmk8eR"
            alt=""
          />
        </TopRight>
      </TopbarWrapper>
    </TopbarClass>
  );
};

export default Topbar;
