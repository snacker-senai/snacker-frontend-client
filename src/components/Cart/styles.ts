import styled from 'styled-components'

interface IStyledCartProps {
    expandedSidebar: boolean
}

export const StyledCart = styled.div<IStyledCartProps>`
    width: ${(props) => props.expandedSidebar ? '33%' : '0px'};
    height: calc(100% - 75px);
    overflow: hidden;
    transition: width 0.3s ease-in-out;
    z-index: 999;
    background-color: white;
    position: absolute;
    right: 0;
    top: 75px;
    border-left: 1px solid rgb(200, 200, 200);
`
