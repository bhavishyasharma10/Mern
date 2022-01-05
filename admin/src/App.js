import Topbar from "./components/Topbar";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { useState } from "react";
import { List } from "@material-ui/icons";
const Container = styled.div`
  display: flex;
`;
const AdminPanel = styled.div`
  position: relative;
`;
const VisibilityWrapper = styled.div`
  position: fixed;
  margin: 0.35em;
  background-color: white;
  color: slateblue;
  padding: 0.3em;
  border-radius: 0.5em;
  border: 0.125em solid slategray;
  cursor: pointer;
  font-size: 0.875em;
  z-index: 1000;
`;

function App() {
  let admin = useSelector((state) => state.user.currentUser);
  if (admin) admin = admin.isAdmin;
  else admin = false;

  const [visible, setVisible] = useState("On");

  const handleClick = () => {
    if (visible === "On") {
      setVisible("Off");
    } else {
      setVisible("On");
    }
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
      {admin && (
        <AdminPanel>
          <VisibilityWrapper onClick={handleClick}>
            <List />
          </VisibilityWrapper>
          <Topbar />
          <Container>
            <Sidebar visibility={visible} />
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/users" element={<UserList />} />
            </Routes>
            <Routes>
              <Route path="/user/:userId" element={<User />} />
            </Routes>
            <Routes>
              <Route path="/newUser" element={<NewUser />} />
            </Routes>
            <Routes>
              <Route path="/products" element={<ProductList />} />
            </Routes>
            <Routes>
              <Route path="/product/:productId" element={<Product />} />
            </Routes>
            <Routes>
              <Route path="/newproduct" element={<NewProduct />} />
            </Routes>
          </Container>
        </AdminPanel>
      )}
    </Router>
  );
}

export default App;
