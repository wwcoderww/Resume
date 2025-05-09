import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    html,body {
        margin: 0;
        padding: 0;
        --main-background-color: blue;
    }
    a {
        text-decoration: none;
        color: inherit
    }`;
export default GlobalStyles;
