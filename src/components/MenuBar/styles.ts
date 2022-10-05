import styled from 'styled-components'

export const StyledMenuBar = styled.div`
    height: 55px;
    width: 100%;
    background-color: ${props => props.theme.secondaryColor};
    display: flex;
    align-items: center;
    padding: 15px;
    overflow-x: auto;
    position: fixed;
    top: 75px;
    z-index: 1000;
    box-shadow: 3px 3px 15px -8px rgba(0,0,0,0.33);

    ::-webkit-scrollbar {
        display: none;
    }

    p {
        font-size: 16px;
        color: ${props => props.theme.tertiaryFontColor};
        font-weight: 500;
        margin-right: 17px;
        cursor: pointer;
    }

    p.selected {
        color: ${props => props.theme.secondaryFontColor};
    }
`;