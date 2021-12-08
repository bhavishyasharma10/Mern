import React from "react";
import styled from "styled-components";

const NewProductContainer = styled.div`
  flex: 5;
  padding: 0.625em;
`;
const AddProductTitle = styled.h1``;
const AddProductForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const AddProductItem = styled.div`
  width: 15em;
  display: flex;
  flex-direction: column;
  margin-top: 0.625em;
  margin-right: 1.25em;
`;
const AddProductLabel = styled.label`
  margin-bottom: 0.625em;
  font-size: 1em;
  font-weight: 600;
  color: gray;
`;
const AddProductInput = styled.input`
  height: 1.25em;
  padding: 0.625em;
  border-radius: 0.3125em;
  border: ${(props) =>
    props.type === "file" ? "none" : "0.0625em solid slateblue"};
`;
const AddProductSelect = styled.select`
  height: 2.5em;
  border-radius: 0.3125em;
  border: 0.0625em solid slateblue;
`;
const AddProductOption = styled.option``;
const AddProductButton = styled.button`
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

const NewProduct = () => {
  return (
    <NewProductContainer>
      <AddProductTitle>New Product</AddProductTitle>
      <AddProductForm>
        <AddProductItem>
          <AddProductLabel>Image</AddProductLabel>
          <AddProductInput type="file" id="file" />
        </AddProductItem>
        <AddProductItem>
          <AddProductLabel>Title</AddProductLabel>
          <AddProductInput type="text" name="title" placeholder="Earrings" />
        </AddProductItem>
        <AddProductItem>
          <AddProductLabel>Description</AddProductLabel>
          <AddProductInput
            type="text"
            name="desc"
            placeholder="description.."
          />
        </AddProductItem>
        <AddProductItem>
          <AddProductLabel>Price</AddProductLabel>
          <AddProductInput type="number" name="price" placeholder="100" />
        </AddProductItem>
        <AddProductItem>
          <AddProductLabel>Categories</AddProductLabel>
          <AddProductInput
            type="text"
            name="title"
            placeholder="Earrings/Jewllery"
          />
        </AddProductItem>
        <AddProductItem>
          <AddProductLabel>Stock</AddProductLabel>
          <AddProductSelect name="inStock">
            <AddProductOption value="true">Yes</AddProductOption>
            <AddProductOption value="false">No</AddProductOption>
          </AddProductSelect>
        </AddProductItem>
        <AddProductButton>Create</AddProductButton>
      </AddProductForm>
    </NewProductContainer>
  );
};

export default NewProduct;
