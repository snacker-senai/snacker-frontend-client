import styled from 'styled-components'

interface IStyledTopBar {
    isCartEmpty: boolean
}

export const StyledTopBar = styled.div<IStyledTopBar>`
    height: 75px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-bottom: 1px solid var(--light-gray);
    position: fixed;

    div.menu-sessions {
        display: flex;
        justify-content: space-between;
        height: 100%;
    }

    div.left-session {
        display: flex;
        align-items: center;
        font-size: 25px;
        font-weight: bold;
        padding: 15px;
        color: rgb(51, 51, 54);
    }

    div.center-session {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40%;

        input {
            background-color: rgb(242, 242, 242);
            padding: 15px;
            padding-right: 48px;
            border-radius: 12px;
            width: 100%;
            outline: none;
        }

        svg {
            position: absolute;
            font-size: 22px;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: rgb(80, 80, 80);
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
            padding-left: 10px;
            padding-right: 10px;

            svg {
                color: var(--dark-gray);
                cursor: pointer;
            }
        }

        .bill-icon {
            font-size: 20px;
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

    @media (max-width: 768px) {
        div.left-session {
            font-size: 1.5em !important;
        }

        div.center-session {
            padding-top: 3px;
            padding-left: 12px;
            padding-right: 12px;
            width: 100%;
        }
    }
`;