import styled from 'styled-components'

interface IStyledCartProps {
    expandedSidebar: boolean
}

export const StyledCart = styled.div<IStyledCartProps>`
    width: ${(props) => props.expandedSidebar ? '100%' : '0px'};
    height: calc(100% - 75px);
    overflow: hidden;
    transition: width 0.3s ease-in-out;
    z-index: 999;
    background-color: transparent;
    position: absolute;
    right: 0;
    top: 75px;
    display: flex;
    justify-content: end;

    .invisible-area {
        width: 67%;
        height: 100%;
    }

    .cart-bar {
        width: 33%;
        background-color: white;
        height: 100%;
        border-left: 1px solid rgb(200, 200, 200);
    }
`
