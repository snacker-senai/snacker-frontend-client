import styled from 'styled-components'

export const StyledTopBar = styled.div`
    height: 55px;
    width: 100%;
    background-color: rgb(37, 104, 183);
    display: flex;
    justify-content: space-between;
    color: white;

    div.left-session {
        display: flex;
        align-items: center;
        font-size: 28px;
        font-weight: bold;
        padding: 15px;
    }

    div.right-session {
        display: flex;
        align-items: center;
        justify-content: right;
        font-size: 30px;
        padding: 15px;

        svg {
            margin-left: 10px;
            margin-right: 10px;
        }
    }
`;