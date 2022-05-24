import styled from "styled-components";


export const BackFace = styled.img`

  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: inherit;
  backface-visibility: hidden; 
  object-fit:cover;
  pointer-events:none;

  transform:rotateY(180deg)
`