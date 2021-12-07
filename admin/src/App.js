import Topbar from "./components/Topbar";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
const Container = styled.div`
  display: flex;
`;
function App() {
  return (
    <div>
      <Topbar />
      <Container>
        <Sidebar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route exact path="/users" element={<UserList />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
