import styled from 'styled-components'

export const StyledTopBar = styled.div`
    height: 75px;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(200, 200, 200);

    div.left-session {
        display: flex;
        align-items: center;
        font-size: 25px;
        font-weight: bold;
        padding: 15px;
        color: rgb(51, 51, 54);
    }

    div.center-session {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 33%;

        input {
            background-color: rgb(247, 247, 247);
            padding: 15px;
            border-radius: 12px;
            width: 100%;
        }
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