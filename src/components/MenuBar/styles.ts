import styled from 'styled-components'

export const StyledMenuBar = styled.div`
    height: 55px;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid var(--light-gray);
    display: flex;
    align-items: center;
    padding: 15px;
    overflow-x: auto;
    position: fixed;
    top: 75px;

    ::-webkit-scrollbar {
        display: none;
    }

    p {
        font-size: 18px;
        color: rgb(51, 51, 54);
        font-weight: bold;
        margin-right: 17px;
        cursor: pointer;
    }

    p.selected {
        color: var(--blue);
    }
`;