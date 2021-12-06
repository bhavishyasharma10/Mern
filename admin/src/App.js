import Topbar from "./components/topbar/Topbar";
import styled from "styled-components";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";

const Container = styled.div`
  display: flex;
`;
function App() {
  return (
    <div>
      <Topbar />
      <Container>
        <Sidebar />
        <Home />
      </Container>
    </div>
  );
}

export default App;
