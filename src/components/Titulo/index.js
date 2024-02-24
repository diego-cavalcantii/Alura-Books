import styled from "styled-components";

export const Titulo = styled.h2`
  font-size:${props => props.size || '18px'};
  color:${props => props.cor||'#000'};
  text-transform:${props => props.transform ||"uppercase"};
  text-align:${props => props.align ||'center'};
`