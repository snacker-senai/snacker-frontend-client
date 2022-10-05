import styled from 'styled-components'

export const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
    
    .content {
        padding-top: 30px;
        padding-bottom: 70px;
        padding-left: 18px;
        padding-right: 18px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 130px;
        width: 100%;
        max-width: 1100px;
        background: rgb(245, 245, 245);
    }

    .input-container {
        width: 100%;
        position: relative;
        z-index: 0;

        input {
            background-color: rgb(255, 255, 255);
            padding: 15px;
            border-radius: 66px;
            width: 100%;
            padding-right: 48px;
            outline: none;
            box-shadow: 3px 3px 15px -8px rgba(0,0,0,0.22);
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
        font-weight: 600;
        color: rgb(20, 20, 20);
    }

    .products {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`
