import styled from "styled-components";
import {Titulo} from "../Titulo/index";
import { SubTitulo } from "../SubTitulo/SubTitulo";


const Card = styled.section`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  display :flex;
  gap:20px;
  padding: 30px 50px;
  margin:30px;
`

const Button = styled.button`
  display:block;
  background-color: orange;
  border:none;
  color:white;
  padding:10px 40px;
`

const Desc = styled.p`
  width :300px;
  margin:30px 0;
  text-align:center;
`

function CardRecomenda ({titulo,subtitulo,descricao,img}){
  return (
    <Card>
      <div>
        <Titulo cor="orange" size="18px" align="center" transform="normal">{titulo}</Titulo>
        <SubTitulo>{subtitulo}</SubTitulo>
        <Desc>{descricao}</Desc>
      </div>
      <div>
        <img src={img}/>
        <Button>Saiba mais</Button>
      </div>
    </Card>
  )
}

export default CardRecomenda