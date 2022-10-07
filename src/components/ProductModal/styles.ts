import styled from 'styled-components'

export const StyledProductModal = styled.div`
    width: 100%;
    height: 100%;

    .header {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-weight: 600;
        font-size: 1.21em;
        padding: 13px;
        z-index: 999;
        
        .close-button {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 6px;
            background-color: white;
            cursor: pointer;
            border-radius: 100%;
            box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.1);
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;

        .left-session {
            position: relative;
            width: 100%;
            height: 33%;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                box-shadow: 
                    inset 0px 11px 8px -10px #000,
                    inset 0px -11px 8px -10px #000; 
            }

            .shadow {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                box-shadow: inset 0px 20px 22px -10px rgba(0, 0, 0, 0.08);
            }
        }

        .right-session {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            padding: 24px;

            .product-title {
                font-size: 1.3em;
                color: rgb(33, 33, 33);
                font-weight: 600;
            }

            .product-description {
                margin-top: 4px;
                font-size: 1.05em;
                color: rgb(105, 105, 105);
            }

            .comment-container {
                padding-top: 35px;
                flex-grow: 1;

                span {
                    width: 100%;
                    margin-left: 1px;
                    font-weight: 500;
                    font-size: 1.05em;
                    color: rgb(80, 80, 80);
                }

                .comment-input {
                    margin-top: 8px;
                    padding: 15px;
                    border: 1px solid rgb(223, 223, 223);
                    border-radius: 5px;
                    width: 100%;
                    outline: none;
                    resize: none;
                }

                .comment-input::placeholder {
                    color: rgb(190, 190, 190);
                    font-weight: 400;
                }
            }

            .footer {
                display: flex;
                align-items: center;
                justify-content: end;

                .add-button {
                    background-color: ${props => props.theme.color};
                    color: ${props => props.theme.fontColor};
                    padding: 11px;
                    padding-left: 14px;
                    padding-right: 14px;
                    font-weight: bold;
                    border-radius: 5px;
                    transition: 0.3s;
                    cursor: pointer;

                    &:hover {
                        filter: brightness(85%);
                    }
                }

                .quantity-container {
                    display: flex;
                    align-items: center;
                    margin-right: 10px;
                    border: 1px solid rgb(223, 223, 223);
                    border-radius: 5px;

                    span {
                        padding: 10px;
                        display: flex;
                        align-items: center;
                        color: rgb(60, 60, 60);
                    }

                    .minus, .plus {
                        cursor: pointer;
                    }

                    .disabled {
                        color: rgb(130, 130, 130);
                    }

                    .quantity {
                        font-weight: bold;
                        font-size: 1.15em;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        .left-session {
            width: 100% !important;
        }

        .right-session {
            width: 100% !important;
            flex-grow: 1 !important;
        }

        .footer {
            flex-grow: 1 !important;
            flex-direction: column !important;

            .quantity-container {
                margin: 0 !important;
                margin-bottom: 12px !important;
                justify-content: space-between !important;
            }
            
            div, button {
                width: 100%;
                margin-bottom: 10px !important;
            }
        }
    }
`