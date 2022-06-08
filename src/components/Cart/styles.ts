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
    z-index: 999;
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
            font-weight: bold;
            font-size: 1.15em;
            color: rgb(48, 48, 48);

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
        border-top: 1px solid var(--light-gray);
        font-size: 1.08em;

        &:last-child {
            border-bottom: 1px solid var(--light-gray);
        }

        .product-information {
            display: flex;
            justify-content: space-between;

            .product-price {
                font-weight: bold;
            }
        }

        .product-options {
            margin-top: 15px;
            font-weight: bold;

            .edit {
                color: var(--blue);
                margin-right: 12px;
                cursor: pointer;
            }

            .remove {
                color: rgb(120, 120, 120);
                cursor: pointer;
            }
        }
    }

    .cart-information {
        .order-button {
            width: 100%;
            padding: 15px;
            background-color: rgb(30, 97, 176);
            color: white;
            font-size: 1.33em;
            font-weight: 500;
            letter-spacing: 0.5px;
            border-radius: 5px;
            cursor: pointer;

            &:hover {
                background-color: var(--dark-blue);
            }
        }

        .cart-total-price {
            display: flex;
            justify-content: space-between;
            padding-top: 14px;
            padding-bottom: 14px;

            span {
                font-weight: bold;
                font-size: 1.42em;
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
