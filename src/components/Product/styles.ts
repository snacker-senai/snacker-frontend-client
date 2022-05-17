import styled from 'styled-components'

export const StyledProduct = styled.div`
    background-color: white;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 4px;
    padding: 15px;
    width: 48%;
    height: 175px;
    margin-bottom: 14px;
    margin-top: 14px;
    display: flex;
    cursor: pointer;
    transition: 0.25s;

    .left-session {
        display: flex;
        flex-direction: column;
        width: 70%;
    }

    .right-session {
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            max-width: 95%;
            max-height: 95%;
        }
    }

    &:hover {
        border-color: rgb(205, 205, 205);
    }

    @media (max-width: 768px) {
        width: 98%;
    }

    .title {
        font-size: 1.25em;
    }

    .description {
        font-size: 0.9em;
        color: rgb(100, 100, 100);
        flex-grow: 1;
        padding-top: 10px;
        padding-bottom: 10px;
        text-overflow: ellipsis;
    }
`