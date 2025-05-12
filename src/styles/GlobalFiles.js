import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    html,body {
        margin: 0;
        padding: 0;
        --main-background-color: blue;
        --main-color: rgb(255, 176, 28);
        --secondary-color: rgb(216, 216, 216);
        --third-color: rgb(238, 238, 238);
    }
    a {
        text-decoration: none;
        color: inherit
    }`;
export default GlobalStyles;
