import styled from 'styled-components'

interface IStyledTopBar {
    isCartEmpty: boolean
}

export const StyledTopBar = styled.div<IStyledTopBar>`
    height: 75px;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--light-gray);
    position: fixed;

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
            background-color: rgb(242, 242, 242);
            padding: 15px;
            border-radius: 12px;
            width: 100%;
        }
    }

    div.right-session {
        display: flex;
        align-items: center;
        justify-content: right;
        font-size: 22px;
        padding: 15px;

        span {
            display: flex;
            align-items: center;
            padding: 7px;

            svg {
                color: var(--dark-gray);
                cursor: pointer;
            }
        }

        .cart-icon {
            cursor: pointer;
            background-color: ${props => props.isCartEmpty ? 'transparent' : 'var(--blue)'};
            border-radius: 33px;
            transition: 0.25s;
            padding-left: 11px;
            padding-right: 11px;
            
            svg {
                color: ${props => props.isCartEmpty ? 'var(--dark-gray)' : 'white'};
            }

            .cart-price {
                color: ${props => props.isCartEmpty ? 'var(--dark-gray)' : 'white'};
                font-size: 10px;
            }

            &:hover {
                background-color: ${props => props.isCartEmpty ? 'transparent' : 'var(--dark-blue)'};
            }
        }
    }
`;