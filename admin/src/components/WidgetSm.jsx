import { Visibility } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const WidgetSmContainer = styled.div`
  flex: 1;
  box-shadow: 9px -1px 27px 11px rgba(223, 242, 245, 0.74);
  padding: 1em;
  margin-right: 1.25em;
`;
const WidgetSmTitle = styled.span`
  font-size: 1.2em;
  font-weight: 600;
`;
const WidgetSmList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const WidgetSmListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.25em 0em;
`;
const WidgetSmUserImg = styled.img`
  font: 2.25em;
  height: 2.25em;
  border-radius: 50%;
  object-fit: cover;
`;
const WidgetSmUser = styled.div`
  display: flex;
  flex-direction: column;
`;
const WidgetSmUserName = styled.span`
  font-weight: 600;
`;
const WidgetSmUserTitle = styled.span`
  font-weight: 300;
`;

const WidgetSmButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 0.625em;
  padding: 0.4em 0.6em;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;

const WidgetSm = () => {
  return (
    <WidgetSmContainer>
      <WidgetSmTitle>New Join Members</WidgetSmTitle>
      <WidgetSmList>
        <WidgetSmListItem>
          <WidgetSmUserImg src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />

          <WidgetSmUser>
            <WidgetSmUserName>Anaa kellar</WidgetSmUserName>
            <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
          </WidgetSmUser>

          <WidgetSmButton>
            <Visibility style={{ fontSize: "1.25em", marginRight: "0.25em" }} />
            Display
          </WidgetSmButton>
        </WidgetSmListItem>

        <WidgetSmListItem>
          <WidgetSmUserImg src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />

          <WidgetSmUser>
            <WidgetSmUserName>Anaa kellar</WidgetSmUserName>
            <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
          </WidgetSmUser>

          <WidgetSmButton>
            <Visibility style={{ fontSize: "1.25em", marginRight: "0.25em" }} />
            Display
          </WidgetSmButton>
        </WidgetSmListItem>

        <WidgetSmListItem>
          <WidgetSmUserImg src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />

          <WidgetSmUser>
            <WidgetSmUserName>Anaa kellar</WidgetSmUserName>
            <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
          </WidgetSmUser>

          <WidgetSmButton>
            <Visibility style={{ fontSize: "1.25em", marginRight: "0.25em" }} />
            Display
          </WidgetSmButton>
        </WidgetSmListItem>

        <WidgetSmListItem>
          <WidgetSmUserImg src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />

          <WidgetSmUser>
            <WidgetSmUserName>Anaa kellar</WidgetSmUserName>
            <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
          </WidgetSmUser>

          <WidgetSmButton>
            <Visibility style={{ fontSize: "1.25em", marginRight: "0.25em" }} />
            Display
          </WidgetSmButton>
        </WidgetSmListItem>

        <WidgetSmListItem>
          <WidgetSmUserImg src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />

          <WidgetSmUser>
            <WidgetSmUserName>Anaa kellar</WidgetSmUserName>
            <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
          </WidgetSmUser>

          <WidgetSmButton>
            <Visibility style={{ fontSize: "1.25em", marginRight: "0.25em" }} />
            Display
          </WidgetSmButton>
        </WidgetSmListItem>
      </WidgetSmList>
    </WidgetSmContainer>
  );
};

export default WidgetSm;
