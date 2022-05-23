import { createGlobalStyle } from "styled-components";


export const GloblaStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    width:100%;
    min-height: 100vh;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    background-image: url('/images/wallpaper.jpg') ;
    background-repeat: no-repeat ;
    background-size:cover ;
    background-position:center ;
}
`