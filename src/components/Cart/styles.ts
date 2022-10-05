import styled from 'styled-components'

interface IStyledCartProps {
    expandedSidebar: boolean
    isCartEmpty: boolean
}

export const StyledCart = styled.div<IStyledCartProps>`
    width: ${(props) => props.expandedSidebar ? '100%' : '0px'};
    height: calc(100% - 75px);
    overflow: hidden;
    transition: width 0.2s ease-in-out;
    z-index: 500000;
    background-color: transparent;
    position: fixed;
    right: 0;
    top: 75px;
    display: flex;
    justify-content: end;

    .invisible-area {
        width: 70%;
        height: 100%;

        @media (max-width: 1100px) {
            width: 56%;
        }

        @media (max-width: 768px) {
            width: 0%;
        }
    }

    .cart-bar {
        width: 30%;
        background-color: white;
        height: 100%;
        border-left: 1px solid var(--light-gray);
        padding: 20px;
        padding-left: 35px;
        padding-right: 35px;
        display: flex;
        flex-direction: column;
        justify-content: ${(props) => props.isCartEmpty ? 'center' : 'start'};
        align-items: ${(props) => props.isCartEmpty ? 'center' : 'initial'};

        @media (max-width: 1100px) {
            width: 44%;
        }

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    .cart-header {
        display: flex;
        justify-content: space-between;
        padding-top: 17px;
        padding-bottom: 17px;

        span {
            font-weight: 600;
            font-size: 1.15em;
            color: rgb(33, 33, 33);

            svg {
                cursor: pointer;
            }
        }
    }

    .product-list {
        flex-grow: 1;
    }

    .product-container {
        padding: 5px;
        padding-top: 16px;
        padding-bottom: 16px;
        border-top: 1px solid rgb(225, 225, 225);
        font-size: 1.08em;

        &:last-child {
            border-bottom: 1px solid rgb(225, 225, 225);
        }

        .product-information {
            display: flex;
            justify-content: space-between;

            .product-price {
                font-weight: 600;
            }
        }

        .product-options {
            margin-top: 15px;
            font-weight: 600;

            .edit {
                /* color: var(--blue); */
                margin-right: 12px;
                cursor: pointer;
            }

            .remove {
                color: rgb(50, 50, 50);
                cursor: pointer;
            }
        }
    }

    .cart-information {
        .order-button {
            width: 100%;
            padding: 15px;
            background-color: ${props => props.theme.color};
            color: white;
            font-size: 1.15em;
            font-weight: 500;
            letter-spacing: 0.5px;
            border-radius: 5px;
            cursor: pointer;

            &:hover {
                filter: brightness(85%);
            }
        }

        .cart-total-price {
            display: flex;
            justify-content: space-between;
            padding-top: 14px;
            padding-bottom: 14px;

            span {
                font-weight: 600;
                font-size: 1.42em;
            }

            .value {
                font-weight: 500;
                font-size: 1.35em;
            }
        }
    }

    @media (max-width: 768px) {
        .cart-bar {
            padding: 20px;
            padding-left: 15px;
            padding-right: 15px;
        }
    }
`
