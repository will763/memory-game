import styled, { keyframes } from "styled-components";

const matched = keyframes`
  from {
    transform: scale(.8);
  } 

  to {
    transform: scale(1);
  }
`;

export const Div = styled.div`

    height: calc( 33.333% - 10px);
    width: calc(25% - 10px);
    margin: 5px;
    position: relative;
    box-shadow: 1px 1px 1px rgba(0,0,0,.3);
    cursor: pointer;
    transform: scale(1);
    transform-style: preserve-3d;
    transition: all .5s ease;
    border-radius: 5px;

    &:active {
      transform: scale(0.97);
      transition: transform .2s;
    }

`