import Topbar from "./components/topbar/Topbar";
import styled from "styled-components";
import Sidebar from "./components/sidebar/Sidebar";

const Container = styled.div`
  display: flex;
`;
const Other = styled.div`
  flex: 4;
`;
function App() {
  return (
    <div>
      <Topbar />
      <Container>
        <Sidebar />
        <Other>For now</Other>
      </Container>
    </div>
  );
}

export default App;
