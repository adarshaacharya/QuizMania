import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color : #F5A6C4;
        --dark-color : #282C35;
        font-size: 62.5%;
    }

    * {
        box-sizing: border-box;
        padding :0;
        margin : 0;
    }

     html, body {
        font-family: "Inter", sans-serif;       
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background : var(--dark-color);
    }


    h1,
    h2,
    h3,
    h4 {
        font-family: "Montserrat", sans-serif;       
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-weight : 900;
    }

    h1 {
        font-size: 5.4rem;
        margin-bottom: 5rem;
    }


    h2 {        
        font-size : 2.5rem;
        margin-bottom: 4rem;
        font-weight: 700;
        line-height : 44px;
    }


`;

export default GlobalStyles;