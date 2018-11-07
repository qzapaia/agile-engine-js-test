import styled from "styled-components"

export const PopoverMenu = styled.div`
  position:absolute;
  padding:10px;
  background-color: white;
  border: solid 1px #ccc;
  left: ${props => props.show.left + 'px'};
  top: ${props => props.show.top + 'px'};
  margin: 10px 0 0 0;
  display: ${props => props.show ? '' : 'none'};
`