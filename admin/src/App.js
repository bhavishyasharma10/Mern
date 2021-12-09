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
const Container = styled.div`
  display: flex;
`;
const AdminPanel = styled.div``;

function App() {
  let admin = useSelector((state) => state.user.currentUser);
  if (admin) admin = admin.isAdmin;
  else admin = false;

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
      {admin && (
        <AdminPanel>
          <Topbar />
          <Container>
            <Sidebar />
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
