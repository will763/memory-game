import styled, { keyframes } from "styled-components";

const matched = keyframes`
  10% {
    transform: scale(1);
  } 

  25% {
    transform: scale(.8);
  }

  50% {
    transform: scale(.9);
  }

  75% {
    transform: scale(.8);
  }

  100% {
    transform: scale(1);
  }
`;

const ray = keyframes`
  to {
    top:0% ;
  } 

  from {
    top: 85% ;
    opacity:1 ;
  }
`;

export const Div = styled.div`

    height: calc( 33.333% - 10px);
    width: calc(25% - 10px);
    margin: 5px;
    position: relative;
    box-shadow: 1px 1px 1px rgba(0,0,0,.3);
    cursor: pointer;
    transform-style: preserve-3d;
    transition: transform .5s ease;
    border-radius: 5px;

    &.flip {
      transform:rotateY(180deg) ;
    }

    &[data-match="matched"] {
       animation: ${matched} 1s linear 1;

       &::before {
         content:'';
         opacity:0 ;
         position: absolute ;
         width:100% ;
         height:2rem ;
         background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,.5),rgba(255,255,255,.0));
         top: 85%;
         z-index:1 ;
         animation: ${ray} 500ms linear 1s 1;
       }
    }

`