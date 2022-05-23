import styled from "styled-components";

interface Props {
  start: number | null;
}

export const Start = styled.div<Props>`
    
  position: absolute;
  z-index:1 ;
  left:0;
  top:0 ;
  background-color: rgba(0,0,0,.8);
  width:100vw;
  height:100% ;
  transform:${({ start }) => start === null ? '' : 'translateY(-100%)'};
  transition: transform 1s linear;
  display:flex;
  flex-direction:column ;
  align-items:center ;
  justify-content:center;
  transition: transform 1s ease;

  h1 {
    background-image: url('images/text-wallpaper.jpeg') ;
    background-size:cover ;
    background-clip: text;
   -webkit-background-clip: text;
    color: transparent;
    margin-bottom:1rem ;
    font-family:Arial, Helvetica, sans-serif ;
    font-size:6rem ;
    margin-bottom:3rem ;
}

`