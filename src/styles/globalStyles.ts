import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`    
    * {
        margin: 0px;
        border: 0px;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    :root {
        --light-gray: rgb(200, 200, 200);
        --dark-gray: rgb(33, 33, 33);
        --blue: rgb(37, 104, 183);
        --dark-blue: rgb(27, 94, 173);
    }

    html {
        font-size: 13px;
    }
    
    html, body {
        color: rgb(30, 30, 30);
        background-color: rgb(245, 245, 245);
    }

    body > #root > div {
        min-height: 100vh;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #999;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`
