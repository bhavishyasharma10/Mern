import React, { useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";

const UserListContainer = styled.div`
  flex: 5;
  width: 90%;
`;
const UserListUser = styled.div`
  display: flex;
  align-items: center;
`;
const UserListImg = styled.img`
  height: 2.25em;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1em;
`;

const UserListButton = styled.button`
  border: none;
  border-radius: 0.625em;
  padding: 0.3125em 0.625em;
  background-color: #3bb013;
  color: white;
  cursor: pointer;
`;

const UserList = () => {
  const [data, setData] = useState(userRows);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <UserListUser>
            <UserListImg src={params.row.avatar} alt="" />
            {params.row.username}
          </UserListUser>
        );
      },
    },
    {
      field: "email",
      headerName: "Email ",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transactions",
      width: 150,
    },
    {
      field: "action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/users/" + params.row.id}>
              <UserListButton>Edit</UserListButton>
            </Link>
            <DeleteOutlineOutlined
              style={{
                fontSize: "1.45em",
                marginLeft: "0.25em",
                color: "red",
                cursor: "pointer",
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <UserListContainer>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </UserListContainer>
  );
};

export default UserList;
