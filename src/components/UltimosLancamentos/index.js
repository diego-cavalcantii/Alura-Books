import styled from "styled-components";
import {livros} from "./dadosUltimosLancamentos";
import {Titulo} from "../Titulo/index";
import CardRecomenda from "../CardRecomenda/CardRecomenda";
import imagemLivro from "../../imagens/livro2.png";

const UltimosLancamentosContainer = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding :30px 0 0 0;
  gap:20px;
`


const UltimosLivrosContainer = styled.div`
  width:100%;
  background-color: #EBECEE;
  display :flex;
  flex-wrap: wrap;
  gap:20px;
  justify-content:center;
  align-items:center;
  padding :50px 0;
`
function UltimosLancamentos () {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="darkorange" size="36px" align="center">Ultimos Lançamentos</Titulo>
      <UltimosLivrosContainer>
        {livros.map(livro => (
          <img src={livro.src} alt="desc"/>
        ))}
      </UltimosLivrosContainer>
      <CardRecomenda
      titulo="Talvez você se interesse por"
      subtitulo="Angular 11"
      descricao="Construindo uma aplicação com a plataforma google"
      img={imagemLivro}/>
    </UltimosLancamentosContainer>
  )
}

export default UltimosLancamentos