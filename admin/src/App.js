import Topbar from "./components/Topbar";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
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
