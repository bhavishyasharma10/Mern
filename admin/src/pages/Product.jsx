import { PublishOutlined } from "@material-ui/icons";
import React, { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Chart from "../components/Chart";
import { useSelector } from "react-redux";
import { userRequest } from "../requestMethods";
import Multiselect from "multiselect-react-dropdown";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import { updateproducts } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  const [pStats, setPStats] = useState([]);
  const [title, setTitle] = useState(product.title);
  const [desc, setDesc] = useState(product.desc);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(price.inStock);

  const [url, setUrl] = useState(product.img);
  const [selectedSize, setSelectedSize] = useState(product.size);
  const [selectedColor, setSelectedColor] = useState(product.color);
  const [selectedCat, setSelectedCat] = useState(product.categories);
  const colorOptions = ["blue", "black", "white", "indigo", "orange", "yellow"];
  const sizeOptions = ["XS", "S", "M", "L", "XL"];
  const catOptions = [
    "Jwellery",
    "Earrings",
    "Jeans",
    "Clutch Bags",
    "Jackets",
  ];
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
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
          setUrl(downloadURL);
        });
      }
    );
  };

  const handleClick = () => {
    const product = {
      title: title,
      price: price,
      desc: desc,
      _id: productId,
      img: url,
      categories: selectedCat,
      size: selectedSize,
      color: selectedColor,
      InStock: stock,
    };
    updateproducts(productId, product, dispatch);
    navigate(`/product/${productId}`);
  };

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
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </ProductTopLeft>
        <ProductTopRight>
          <ProductInfoTop>
            <ProductImg src={product.img} />
            <ProductName>{product.title}</ProductName>
          </ProductInfoTop>
          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoKey>Id:</ProductInfoKey>
              <ProductInfoValue>{product._id}</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>Price:</ProductInfoKey>
              <ProductInfoValue>${product.price}</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>Category:</ProductInfoKey>
              <ProductInfoValue>{product.categories}</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>In Stock:</ProductInfoKey>
              <ProductInfoValue>{product.InStock}</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>

      <ProductBottom>
        <ProductForm>
          <ProductFormLeft>
            <ProductFormLabel>Product Name</ProductFormLabel>
            <ProductFormInput
              name="title"
              type="text"
              placeholder={product.title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <ProductFormLabel>Product Description</ProductFormLabel>
            <ProductFormInput
              name="desc"
              type="text"
              placeholder={product.desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <ProductFormLabel>Product Price</ProductFormLabel>
            <ProductFormInput
              name="price"
              type="number"
              placeholder={product.price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <ProductFormLabel>In Stock</ProductFormLabel>
            <ProductFormSelect
              name="inStock"
              id="inStock"
              onChange={(e) => setStock(e.target.value)}
            >
              <ProductFormOption value="true">Yes</ProductFormOption>
              <ProductFormOption value="false">No</ProductFormOption>
            </ProductFormSelect>
            <ProductFormLabel>Size</ProductFormLabel>
            <Multiselect
              isObject={false}
              options={sizeOptions}
              selectedValues={selectedSize}
              onRemove={(event) => setSelectedSize(event)}
              onSelect={(event) => setSelectedSize(event)}
            />
            <ProductFormLabel>Color</ProductFormLabel>
            <Multiselect
              isObject={false}
              options={colorOptions}
              selectedValues={selectedColor}
              onRemove={(event) => setSelectedColor(event)}
              onSelect={(event) => setSelectedColor(event)}
            />
            <ProductFormLabel>Categories</ProductFormLabel>
            <Multiselect
              isObject={false}
              options={catOptions}
              selectedValues={selectedCat}
              onRemove={(event) => setSelectedCat(event)}
              onSelect={(event) => setSelectedCat(event)}
            />
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUpdateUpload>
              <ProductUpdateImg src={product.img} alt="" />
              <ProductUpdateLabel htmlFor="file">
                <PublishOutlined style={{ cursor: "pointer" }} />
              </ProductUpdateLabel>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={handleUpload}
              />
            </ProductUpdateUpload>
            <ProductUpdateButton onClick={handleClick}>
              Update
            </ProductUpdateButton>
          </ProductFormRight>
        </ProductForm>
      </ProductBottom>
    </ProductContainer>
  );
};

export default Product;
