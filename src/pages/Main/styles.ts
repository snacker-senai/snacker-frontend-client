import styled from 'styled-components'

export const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
    
    .content {
        padding-top: 30px;
        padding-bottom: 70px;
        padding-left: 10px;
        padding-right: 10px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 130px;
        width: 100%;
        max-width: 1100px;
    }

    .input-container {
        width: 100%;
        position: relative;

        input {
            background-color: rgb(240, 240, 240);
            padding: 15px;
            border-radius: 12px;
            width: 100%;
            padding-right: 48px;
            outline: none;
        }

        svg {
            position: absolute;
            font-size: 22px;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: rgb(80, 80, 80);
        }
    }

    .products-container {
        flex-grow: 1;
    }

    .category {
        margin-top: 35px;
    }

    .products {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`
