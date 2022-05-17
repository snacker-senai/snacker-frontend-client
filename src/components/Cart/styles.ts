import styled from 'styled-components'

interface IStyledCartProps {
    expandedSidebar: boolean
}

export const StyledCart = styled.div<IStyledCartProps>`
    width: ${(props) => props.expandedSidebar ? '40%' : '0px'};
    overflow: hidden;
    transition: width 0.3s;
    z-index: 999;
`
