import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    
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
        background-color: rgb(246, 246, 248);
    }

    body > #root > div {
        min-height: 100vh;
    }
`