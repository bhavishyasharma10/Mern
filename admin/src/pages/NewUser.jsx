import React from "react";
import styled from "styled-components";

const NewUserContainer = styled.div`
  flex: 4;
  padding: 0.625em;
`;
const NewUserTitle = styled.h1``;
const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const NewUserFormitem = styled.div`
  width: 15em;
  display: flex;
  flex-direction: column;
  margin-top: 0.625em;
  margin-right: 1.25em;
`;
const NewUserLabel = styled.label`
  margin-bottom: 0.625em;
  font-size: 0.8125em;
  font-weight: 600;
  color: gray;
`;

const NewUserInput = styled.input`
  height: 1.25em;
  padding: 0.625em;
  border-radius: 0.3125em;
  border: 0.0625em solid slateblue;
`;
const NewUserGender = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.3125em;
  ${NewUserLabel} {
    margin: 0em 0.625em;
    font-size: 1em;
  }
`;

const NewUserSelect = styled.select`
  height: 2.5em;
  border-radius: 0.3125em;
  border: 0.0625em solid slateblue;
`;
const NewUserButton = styled.button`
  width: 15em;
  border: none;
  background-color: slateblue;
  color: white;
  padding: 0.45em 0.625em;
  font-weight: 600;
  font-size: 1em;
  border-radius: 0.625em;
  margin-top: 1.875em;
  cursor: pointer;
`;

const NewUserOption = styled.option``;
const NewUser = () => {
  return (
    <NewUserContainer>
      <NewUserTitle>New User</NewUserTitle>
      <NewUserForm>
        <NewUserFormitem>
          <NewUserLabel>User Name</NewUserLabel>
          <NewUserInput type="text" placeholder="john" />
        </NewUserFormitem>
        <NewUserFormitem>
          <NewUserLabel>Full Name</NewUserLabel>
          <NewUserInput type="text" placeholder="John Smith" />
        </NewUserFormitem>
        <NewUserFormitem>
          <NewUserLabel>Email</NewUserLabel>
          <NewUserInput type="text" placeholder="john@gmail.com" />
        </NewUserFormitem>
        <NewUserFormitem>
          <NewUserLabel>Password</NewUserLabel>
          <NewUserInput type="password" placeholder="password" />
        </NewUserFormitem>
        <NewUserFormitem>
          <NewUserLabel>Phone</NewUserLabel>
          <NewUserInput type="text" placeholder="+1 123 456 87" />
        </NewUserFormitem>
        <NewUserFormitem>
          <NewUserLabel>Address</NewUserLabel>
          <NewUserInput type="text" placeholder="New York | USA" />
        </NewUserFormitem>
        <NewUserFormitem>
          <NewUserLabel>Gender</NewUserLabel>
          <NewUserGender>
            <NewUserInput type="radio" name="male" id="male" value="male" />
            <NewUserLabel for="male">Male</NewUserLabel>
            <NewUserInput
              type="radio"
              name="female"
              id="female"
              value="female"
            />
            <NewUserLabel for="female">Female</NewUserLabel>
            <NewUserInput type="radio" name="other" id="other" value="other" />
            <NewUserLabel for="other">Other</NewUserLabel>
          </NewUserGender>
        </NewUserFormitem>
        <NewUserFormitem>
          <NewUserLabel>Active</NewUserLabel>
          <NewUserSelect name="active" id="active">
            <NewUserOption value="yes">Yes</NewUserOption>
            <NewUserOption value="no">No</NewUserOption>
          </NewUserSelect>
        </NewUserFormitem>
        <NewUserButton>Create</NewUserButton>
      </NewUserForm>
    </NewUserContainer>
  );
};

export default NewUser;
