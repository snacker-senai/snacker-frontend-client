import styled from 'styled-components'

export const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
    
    .content {
        padding-top: 15px;
        padding-bottom: 70px;
        padding-left: 10px;
        padding-right: 10px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 130px;
        width: 100%;
        max-width: 1100px;
    }

    .products-container {
        flex-grow: 1;
    }

    .category {
        margin-top: 40px;
    }

    .products {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`
