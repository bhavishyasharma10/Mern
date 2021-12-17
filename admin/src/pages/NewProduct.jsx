import React, { useState } from "react";
import styled from "styled-components";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import { addproducts } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";

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
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState({});
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [cat, setCat] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sizeOptions = ["XS", "S", "M", "L", "XL"];
  const colorOptions = ["blue", "black", "white", "indigo", "orange", "yellow"];

  const catOptions = [
    "Jwellery",
    "Earrings",
    "Jeans",
    "Clutch Bags",
    "Jackets",
  ];

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const keys = Object.keys(inputs);
    if (
      keys.includes("title") &&
      keys.includes("desc") &&
      keys.includes("price") &&
      "name" in file
    ) {
      if (Object.values(inputs).some((x) => x === "")) {
        alert("Required Field left empty!");
        return null;
      }
      const filename = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, filename);

      const uploadTask = uploadBytesResumable(storageRef, file);
      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const product = {
              ...inputs,
              img: downloadURL,
              categories: cat,
              size: size,
              color: color,
            };
            addproducts(product, dispatch);
            navigate("/products");
          });
        }
      );
    } else {
      alert("Required fields are empty!!");
    }
  };

  return (
    <NewProductContainer>
      <AddProductTitle>New Product</AddProductTitle>
      <AddProductForm>
        <AddProductItem>
          <AddProductLabel>Image</AddProductLabel>
          <AddProductInput
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </AddProductItem>
        <AddProductItem>
          <AddProductLabel>Title</AddProductLabel>
          <AddProductInput
            type="text"
            name="title"
            placeholder="Earrings"
            onChange={handleChange}
          />
        </AddProductItem>
        <AddProductItem>
          <AddProductLabel>Description</AddProductLabel>
          <AddProductInput
            type="text"
            name="desc"
            placeholder="description.."
            onChange={handleChange}
          />
        </AddProductItem>
        <AddProductItem>
          <AddProductLabel>Price</AddProductLabel>
          <AddProductInput
            type="number"
            name="price"
            placeholder="100"
            onChange={handleChange}
          />
        </AddProductItem>
        <AddProductItem>
          <AddProductLabel>Categories</AddProductLabel>
          <Multiselect
            isObject={false}
            options={catOptions}
            selectedValues={cat}
            onRemove={(event) => setCat(event)}
            onSelect={(event) => setCat(event)}
          />
        </AddProductItem>
        <AddProductItem>
          <AddProductLabel>Size</AddProductLabel>
          <Multiselect
            isObject={false}
            options={sizeOptions}
            selectedValues={size}
            onRemove={(event) => setSize(event)}
            onSelect={(event) => setSize(event)}
          />
        </AddProductItem>
        <AddProductItem>
          <AddProductLabel>Color</AddProductLabel>
          <Multiselect
            isObject={false}
            options={colorOptions}
            selectedValues={color}
            onRemove={(event) => setColor(event)}
            onSelect={(event) => setColor(event)}
          />
        </AddProductItem>
        <AddProductItem>
          <AddProductLabel>Stock</AddProductLabel>
          <AddProductSelect name="InStock" onChange={handleChange}>
            <AddProductOption value="true">Yes</AddProductOption>
            <AddProductOption value="false">No</AddProductOption>
          </AddProductSelect>
        </AddProductItem>
        <AddProductButton onClick={handleClick}>Create</AddProductButton>
      </AddProductForm>
    </NewProductContainer>
  );
};

export default NewProduct;
