import Topbar from "./components/Topbar";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <div>
      <Router>
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
            <Route path="/product/:productId" element={<ProductList />} />
          </Routes>
          <Routes>
            <Route path="/newproduct" element={<ProductList />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
