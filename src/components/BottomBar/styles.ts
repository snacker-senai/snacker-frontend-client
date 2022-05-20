import styled from 'styled-components'

export const StyledBottomBar = styled.div`
    height: 80px;
    width: 100%;
    background-color: white;
    border-top: 1px solid var(--light-gray);
    display: flex;
    align-items: center;
    justify-content: center;

    div.menu-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5px;
        margin: 25px;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        color: rgb(51, 51, 54);

        svg {
            font-size: 40px;
            margin-left: auto;
            margin-right: auto;
        }
    }

    .disabled {
        color: rgb(120, 120, 121) !important;
    }
`
