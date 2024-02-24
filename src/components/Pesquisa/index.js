import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import {livros} from "./dadosPesquisa";
import { SubTitulo } from "../SubTitulo/SubTitulo";



const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%,#326589);
  width:100%;
  color:#FFF;
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:175px 0 ;
`
const Titulo = styled.h2`
  font-size:36px;
  text-transform:uppercase;
`
const Resultado = styled.div`
  display:flex;
  gap :20px;
  // margin:30px 0;
  padding:30px;

  &:hover{
    border :1px solid white;
  }
`


function Pesquisa () {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  // const pesquisaLivro = (event) => { 
  //   const textoDigitado = event.target.value; // vai receber o que foi digitado no input
  //   const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
  //   // vai fazer um filtro na lista, que a cada "livro" do array tem uma propriedade chamada de nome e sendo o "livro.nome", usando o inlcudes ele verifica se existe o que foi digitado no textoDigitado.
  //   setLivrosPesquisados(resultadoPesquisa);//vai atualizar a lista de livros pesquisa
  // }
  return (
    <PesquisaContainer>
      <Titulo>Ja sabe o que procura?</Titulo>
      <SubTitulo cor="#FFF">Encontre seu livro em nossa estante.</SubTitulo>
      <Input placeholder="Escreva sua proxima leitura."
      onBlur={event => {
        const textoDigitado = event.target.value;
        const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado));
        setLivrosPesquisados(resultadoPesquisa);
      }}
      />
      {livrosPesquisados.map(e => (
        <Resultado>
              <img key={e.id} src={e.src} alt="algo errado"/>
              <p>{e.nome}</p>
        </Resultado>
      ))}
    </PesquisaContainer>
  );
};

export default Pesquisa