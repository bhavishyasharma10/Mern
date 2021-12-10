import React, { useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import { productRows } from "../dummyData";
import { Link } from "react-router-dom";

const ProductListContainer = styled.div`
  flex: 4;
`;
const ProductListItem = styled.div`
  display: flex;
  align-items: center;
`;
const ProductListImg = styled.img`
  height: 2.25em;
  width: 2.25em;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1em;
`;

const ProductListButton = styled.button`
  border: none;
  border-radius: 0.625em;
  padding: 0.3125em 0.625em;
  background-color: #3bb013;
  color: white;
  cursor: pointer;
`;
const ProductList = () => {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <ProductListItem>
            <ProductListImg src={params.row.img} alt="" />
            {params.row.name}
          </ProductListItem>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 110,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      width: 110,
    },
    {
      field: "action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/product/" + params.row.id}>
              <ProductListButton>Edit</ProductListButton>
            </Link>
            <DeleteOutlineOutlined
              style={{
                fontSize: "1.45em",
                marginLeft: "0.25em",
                color: "red",
                cursor: "pointer",
              }}
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <ProductListContainer>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </ProductListContainer>
  );
};

export default ProductList;
