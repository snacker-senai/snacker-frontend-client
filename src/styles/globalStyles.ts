import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`    
    * {
        margin: 0px;
        border: 0px;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    html {
        font-size: 13px;
    }
    
    html, body {
        color: rgb(30, 30, 30);
        background-color: rgb(250, 250, 251);
    }

    body > #root > div {
        min-height: 100vh;
    }
`