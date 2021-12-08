import { PublishOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Chart from "../components/Chart";
import { productData } from "../dummyData";
const ProductContainer = styled.div`
  flex: 5;
  padding: 1.15em;
`;
const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductTitle = styled.h1``;
const ProductAddButton = styled.button`
  width: 5em;
  border: none;
  padding: 0.45em;
  background-color: linen;
  border-radius: 0.3125em;
  cursor: pointer;

  font-size: 1em;
`;
const ProductTop = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ProductTopLeft = styled.div`
  flex: 3;
  width: 0;
  height: max-content;
`;
const ProductTopRight = styled.div`
  flex: 1;
  padding: 1em;
  margin: 1em;
  box-shadow: 9px -1px 27px 11px rgba(223, 242, 245, 0.74);
`;

const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`;
const ProductImg = styled.img`
  height: 4.5em;
  width: 4.5em;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1em;
`;
const ProductName = styled.span`
  font-weight: 600;
`;

const ProductInfoBottom = styled.div`
  margin-top: 0.625em;
`;
const ProductInfoItem = styled.div`
  width: 9.375em;
  display: flex;
  justify-content: space-between;
`;
const ProductInfoKey = styled.span``;
const ProductInfoValue = styled.span`
  font-weight: 300;
`;

const ProductBottom = styled.div`
  padding: 1.25em;
  margin: 1.25em;
  box-shadow: 9px -1px 27px 11px rgba(223, 242, 245, 0.74);
`;
const ProductForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 1.2em;
`;

const ProductFormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProductFormLabel = styled.label`
  margin-bottom: 0.3125em;
  font-size: 1em;
  color: gray;
`;
const ProductFormInput = styled.input`
  border: none;
  border-bottom: 0.0625em solid gray;
  padding: 0.3125em 0.625em;
  margin: 0.625em;
`;
const ProductFormSelect = styled.select`
  border: 0.125em slategray solid;
  border-radius: 0.5em;
  width: 60%;
  margin: 0.625em;
`;
const ProductFormOption = styled.option``;

const ProductFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductUpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;
const ProductUpdateImg = styled.img`
  height: 6.25em;
  width: 6.25em;
  border-radius: 0.625em;
  object-fit: cover;
  margin-right: 1em;
`;
const ProductUpdateButton = styled.button`
  border: none;
  width: 100%;
  padding: 0.5em;
  background-color: linen;
  border-radius: 0.3125em;
  cursor: pointer;

  font-size: 1em;
  font-weight: 600;
`;
const ProductUpdateLabel = styled.label`
  margin-bottom: 0.3125em;
  font-size: 0.825em;
`;

const Product = () => {
  return (
    <ProductContainer>
      <ProductTitleContainer>
        <ProductTitle>Product</ProductTitle>
        <Link to="/newproduct">
          <ProductAddButton>Create</ProductAddButton>
        </Link>
      </ProductTitleContainer>

      <ProductTop>
        <ProductTopLeft>
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </ProductTopLeft>
        <ProductTopRight>
          <ProductInfoTop>
            <ProductImg src="https://drive.google.com/uc?export=view&id=1ICKdBOEee6rwQXzlaprqWciN-IcxI-JD" />
            <ProductName>Earrings</ProductName>
          </ProductInfoTop>
          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoKey>Id:</ProductInfoKey>
              <ProductInfoValue>123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>Sales:</ProductInfoKey>
              <ProductInfoValue>$123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>Active:</ProductInfoKey>
              <ProductInfoValue>Yes</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>In Stock:</ProductInfoKey>
              <ProductInfoValue>No</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>

      <ProductBottom>
        <ProductForm>
          <ProductFormLeft>
            <ProductFormLabel>Product Name</ProductFormLabel>
            <ProductFormInput type="text" placeholder="Earrings" />
            <ProductFormLabel>In Stock</ProductFormLabel>
            <ProductFormSelect name="inStock" id="idStock">
              <ProductFormOption value="yes">Yes</ProductFormOption>
              <ProductFormOption value="no">No</ProductFormOption>
            </ProductFormSelect>
            <ProductFormLabel>Active</ProductFormLabel>
            <ProductFormSelect name="active" id="active">
              <ProductFormOption value="yes">Yes</ProductFormOption>
              <ProductFormOption value="no">No</ProductFormOption>
            </ProductFormSelect>
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUpdateUpload>
              <ProductUpdateImg
                src="https://drive.google.com/uc?export=view&id=1ICKdBOEee6rwQXzlaprqWciN-IcxI-JD"
                alt=""
              />
              <ProductUpdateLabel htmlFor="file">
                <PublishOutlined style={{ cursor: "pointer" }} />
              </ProductUpdateLabel>
              <input type="file" id="file" style={{ display: "none" }} />
            </ProductUpdateUpload>
            <ProductUpdateButton>Update</ProductUpdateButton>
          </ProductFormRight>
        </ProductForm>
      </ProductBottom>
    </ProductContainer>
  );
};

export default Product;
