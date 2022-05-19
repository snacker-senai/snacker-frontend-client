import styled from 'styled-components'

export const StyledMenuBar = styled.div`
    height: 55px;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid rgb(200, 200, 200);
    display: flex;
    align-items: center;
    padding: 15px;

    p {
        font-size: 18px;
        color: rgb(51, 51, 54);
        font-weight: bold;
        margin-right: 14px;
        cursor: pointer;
    }

    p.selected {
        color: rgb(37, 104, 183);
    }
`;