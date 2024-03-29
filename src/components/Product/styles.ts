import styled from 'styled-components'

export const StyledProduct = styled.div`
    background-color: white;
    border: 1px solid rgb(236, 236, 236);
    border-radius: 4px;
    padding: 14px;
    width: 48%;
    height: 175px;
    margin-bottom: 14px;
    margin-top: 14px;
    display: flex;
    cursor: pointer;
    transition: 0.25s;
    box-shadow: 3px 3px 15px -8px rgba(0,0,0,0.12);

    .left-session {
        display: flex;
        flex-direction: column;
        width: 70%;
        padding-right: 8px;
    }

    .right-session {
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            max-width: 95%;
            max-height: 95%;
            border-radius: 3px;
        }
    }

    &:hover {
        border-color: rgb(195, 195, 195);
    }

    @media (max-width: 768px) {
        width: 100%;
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