import styled from 'styled-components'

export const StyledMenuBar = styled.div`
    height: 55px;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    padding: 15px;

    p {
        font-size: 18px;
        color: rgb(22, 22, 24);
        font-weight: bold;
        margin-right: 8px;
        cursor: pointer;
    }

    p.selected {
        color: rgb(37, 104, 183);
    }
`;