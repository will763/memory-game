import styled, { keyframes } from "styled-components";

interface Props {
  isStartGame?: boolean
}

const pulse = keyframes`
  25% {
    transform: scale(.95);
  }

  50% {
    transform: scale(.9);
  }

  75% {
    transform: scale(.95);
  }

  100% {
    transform:scale(1) ;
  }
`;

export const ButtonDisplay = styled.button<Props>`
 width: 14rem ;
 height: 2.5rem ;
 border-radius:.5rem ;
 border:none ;
 font-size:1rem ;
 font-weight:bold ;
 cursor: pointer;
 position: relative;

 img {
   max-width:70% ;
   max-height:70% ;
   position: absolute ;
   left:-13% ;
   top: -15%;
   transform: rotate(320deg);
 }
  
  animation-name: ${({ isStartGame }) => isStartGame === true ? '' : pulse};
  animation-duration: 1s ;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`