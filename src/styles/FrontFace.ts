import styled from "styled-components";


export const FrontFace = styled.img`

  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: inherit;
  object-fit:cover ;
  backface-visibility: hidden; 
  pointer-events:none ;

  transform: rotateY(180deg) ;

`