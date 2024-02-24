import styled from "styled-components";

const OpcoesContainer = styled.ul`
  display: flex;

  p {
    text-transform: uppercase;
    height :100%;
    cursor:pointer;
    min-width :120px;
    font-weight : 700;
  }
`
const textoOpcoes = ["categorias", "favoritos", "minha estante"];

function OpcoesHeader (){
  return <OpcoesContainer>
          {textoOpcoes.map((texto) => (
            <li><p>{texto}</p></li>))}
        </OpcoesContainer>
};

export default OpcoesHeader