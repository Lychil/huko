import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0; 
}

button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;  
    font: inherit;
    color: inherit;
    text-align: center;
    cursor: pointer;
    appearance: none;
}

input, textarea {
    all: unset;
    box-sizing: border-box;

    &::-webkit-scrollbar {
        width: 0;
    }
}
`;