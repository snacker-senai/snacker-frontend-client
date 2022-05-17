import styled from 'styled-components'

export const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    
    .content {
        flex-grow: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 70px;
        padding-bottom: 70px;
        padding-left: 10px;
        padding-right: 10px;
        width: 100%;
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
        /* overflow-y: scroll; */
    }
`
