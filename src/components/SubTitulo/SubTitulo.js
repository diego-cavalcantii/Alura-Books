import styled from "styled-components";

export const SubTitulo = styled.h3`
  font-size:${props => props.size ||"16px"};
  margin:${props => props.margin ||"10px 0 "};
  font-weigth:${props => props.weight ||"500"};
  color:${props => props.cor || "#000"};
  text-align:${props=>props.align||"center"};
`