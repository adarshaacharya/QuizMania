import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color : #4487F4;
        font-size: 62.5%;
    }

    * {
        box-sizing: border-box;
        padding :0;
        margin : 0;
        color: #333;
    }

    *:after, *:before {
        box-sizing: border-box;
    }


     html, body {
        font-family: "Inter", sans-serif;       
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #ecf5ff;
    }


    h1,
    h2,
    h3,
    h4 {
        margin-bottom: 1rem;
    }

    h1 {
        font-size: 5.4rem;
        color: var(--primary-color);
        margin-bottom: 5rem;
    }



    h2 {
        font-size: 4.2rem;
        margin-bottom: 4rem;
        font-weight: 700;
    }


`;

export default GlobalStyles;
