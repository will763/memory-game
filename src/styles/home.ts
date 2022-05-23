import styled from "styled-components";

interface Props {
    start: number | null;
}

export const Div = styled.div<Props>`

position: absolute;
z-index:1 ;
left:0;
top:0 ;
background-color: rgba(0,0,0,.8);
width:100vw;
height:100% ;
transition: transform 1s linear;
transform:${({ start }) => start === 6 ? '' : 'translateY(-100%)'};
display:flex;
flex-direction:column ;
align-items:center ;
justify-content:center;
transition: transform 1s ease;

h1 {
    margin-bottom:2rem ;
    color:white ;
    font-family:Arial, Helvetica, sans-serif ;
}
`