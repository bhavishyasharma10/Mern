import {
  CakeOutlined,
  LocationCityOutlined,
  MailOutlined,
  PermIdentityOutlined,
  PhoneAndroidOutlined,
  PublishOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 5;
  padding: 1.15em;
  width: 90%;
`;
const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserTitle = styled.h1``;
const UserAddButton = styled.button`
  width: 5em;
  border: none;
  padding: 0.45em;
  background-color: linen;
  border-radius: 0.3125em;
  cursor: pointer;

  font-size: 1em;
  font-weight: 300;
`;
const UserContainer = styled.div`
  display: flex;
  margin-top: 1em;
`;
const UserShow = styled.div`
  flex: 1;
  padding: 1.2em;
  box-shadow: 9px -1px 27px 11px rgba(223, 242, 245, 0.74);
`;

const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;
const UserShowImg = styled.img`
  height: 2.25em;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1em;
`;
const UserShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserShowUserName = styled.span`
  font-weight: 600;
`;
const UserShowUserTitle = styled.span`
  font-weight: 300;
`;

const UserShowBottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.625em;
`;
const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0.3125em 0.625em 0.3125em 0em;
  color: #444;
`;
const UserShowBottomTitle = styled.span`
  font-size: 1.25em;
  font-weight: 600;
  color: rgb(175, 177, 170);
  margin: 0.45em 0em;
`;
const UserShowInfoTitle = styled.span`
  margin-left: 0.5em;
`;

const UserUpdate = styled.div`
  flex: 2;
  padding: 1.2em;
  box-shadow: 9px -1px 27px 11px rgba(223, 242, 245, 0.74);
  margin-left: 1.2em;
`;
const UserUpdateTitle = styled.span`
  font-size: 1.2em;
  font-weight: 600;
`;
const UserUpdateLabel = styled.label`
  margin-bottom: 0.3125em;
  font-size: 0.825em;
`;
const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 1.2em;
`;
const UserUpdateLeft = styled.div``;
const UserUpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.625em;
`;
const UserUpdateInput = styled.input`
  border: none;
  width: 15em;
  border-bottom: 0.0625em solid gray;
  padding: 0.3125em 0.625em;
`;

const UserUpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const UserUpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;
const UserUpdateImg = styled.img`
  height: 6.25em;
  width: 6.25em;
  border-radius: 0.625em;
  object-fit: cover;
  margin-right: 1em;
`;
const UserUpdateButton = styled.button`
  border: none;
  width: 100%;
  padding: 0.45em;
  background-color: linen;
  border-radius: 0.3125em;
  cursor: pointer;

  font-size: 1em;
  font-weight: 600;
`;
const User = () => {
  return (
    <Container>
      <UserTitleContainer>
        <UserTitle>Edit User </UserTitle>
        <UserAddButton>Create</UserAddButton>
      </UserTitleContainer>
      <UserContainer>
        <UserShow>
          <UserShowTop>
            <UserShowImg
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt=""
            />
            <UserShowTopTitle>
              <UserShowUserName>Anna Hallway</UserShowUserName>
              <UserShowUserTitle>Software Engineer</UserShowUserTitle>
            </UserShowTopTitle>
          </UserShowTop>
          <UserShowBottom>
            <UserShowBottomTitle>Account Details</UserShowBottomTitle>
            <UserShowInfo>
              <PermIdentityOutlined />
              <UserShowInfoTitle>annabeck99</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <CakeOutlined />
              <UserShowInfoTitle>10.12.1999</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowBottomTitle>Contact Details</UserShowBottomTitle>

            <UserShowInfo>
              <PhoneAndroidOutlined />
              <UserShowInfoTitle>+1 123 456 89</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <MailOutlined />
              <UserShowInfoTitle>annabeck99@gmail.com</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <LocationCityOutlined />
              <UserShowInfoTitle>New York | USA</UserShowInfoTitle>
            </UserShowInfo>
          </UserShowBottom>
        </UserShow>
        <UserUpdate>
          <UserUpdateTitle>Edit</UserUpdateTitle>
          <UserUpdateForm>
            <UserUpdateLeft>
              <UserUpdateItem>
                <UserUpdateLabel>Username</UserUpdateLabel>
                <UserUpdateInput type="text" placeholder="annabeck99" />
              </UserUpdateItem>
              <UserUpdateItem>
                <UserUpdateLabel>Full Name</UserUpdateLabel>
                <UserUpdateInput type="text" placeholder="Anna Hallway" />
              </UserUpdateItem>
              <UserUpdateItem>
                <UserUpdateLabel>Phone Number</UserUpdateLabel>
                <UserUpdateInput type="text" placeholder="+1 123 456 89" />
              </UserUpdateItem>
              <UserUpdateItem>
                <UserUpdateLabel>Email</UserUpdateLabel>
                <UserUpdateInput
                  type="text"
                  placeholder="annabeck99@gmail.com"
                />
              </UserUpdateItem>
              <UserUpdateItem>
                <UserUpdateLabel>Address</UserUpdateLabel>
                <UserUpdateInput type="text" placeholder="New York | USA" />
              </UserUpdateItem>
            </UserUpdateLeft>
            <UserUpdateRight>
              <UserUpdateUpload>
                <UserUpdateImg
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt=""
                />
                <UserUpdateLabel htmlFor="file">
                  <PublishOutlined style={{ cursor: "pointer" }} />
                </UserUpdateLabel>
                <input type="file" id="file" style={{ display: "none" }} />
              </UserUpdateUpload>
              <UserUpdateButton>Update</UserUpdateButton>
            </UserUpdateRight>
          </UserUpdateForm>
        </UserUpdate>
      </UserContainer>
    </Container>
  );
};

export default User;
