import styled from 'styled-components'

export const StyledProductModal = styled.div`
    height: 100%;

    .header {
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        font-size: 1.21em;
        color: rgb(63, 63, 63);
        
        .close-button {
            cursor: pointer;
        }
    }

    .content {
        display: flex;
        height: 100%;

        .left-session {
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 25px;

            img {
                max-width: 100%;
            }

            padding: 12px;
        }

        .right-session {
            width: 50%;
            padding: 30px;
            padding-top: 50px;
            display: flex;
            flex-direction: column;

            .product-description {
                font-size: 0.98em;
                color: rgb(105, 105, 105);
            }

            .comment-container {
                padding-top: 35px;
                flex-grow: 1;

                span {
                    width: 100%;
                    margin-left: 1px;
                    font-weight: bold;
                    font-size: 1.1em;
                    color: rgb(80, 80, 80);
                }

                .comment-input {
                    margin-top: 8px;
                    padding: 15px;
                    border: 1px solid var(--light-gray);
                    border-radius: 5px;
                    width: 100%;
                    outline: none;
                    resize: none;
                }
            }

            .footer {
                display: flex;
                align-items: center;
                justify-content: end;

                .add-button {
                    background-color: rgb(27, 94, 173);
                    color: white;
                    padding: 13px;
                    font-weight: bold;
                    border-radius: 5px;
                    transition: 0.3s;
                    cursor: pointer;

                    &:hover {
                        background-color: rgb(17, 84, 163);
                    }
                }

                .quantity-container {
                    display: flex;
                    align-items: center;
                    margin-right: 10px;
                    border: 1px solid rgb(175, 175, 175);
                    border-radius: 5px;

                    span {
                        padding: 12px;
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
`