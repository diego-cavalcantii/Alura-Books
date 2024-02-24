import Header from "./components/Header";
import styled from "styled-components";
import Pesquisa from "./components/Pesquisa";
import UltimosLancamentos from "./components/UltimosLancamentos";

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;

    li + li {
      margin-left:30px;
    }
    li {
      list-style: none;
    }
    display:flex;
    flex-direction:column;
`
function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default App;
