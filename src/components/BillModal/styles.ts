import styled from 'styled-components'

export const StyledBillModal = styled.div`
    height: 100%;
    width: 650px;
    max-width: calc(100vw - 75px);

    .header {
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        font-size: 1.21em;
        color: rgb(63, 63, 63);
        margin-bottom: 20px;
        
        .close-button {
            cursor: pointer;
        }
    }

    .content {
        .order-card {
            padding: 15px;
            margin-bottom: 10px;
            background-color: rgb(244, 244, 244);
            border-radius: 3px;

            .product-info {
                display: flex;
                align-items: center;
                padding: 2px;
                
                .product-name {
                    font-size: 1.05em;
                    margin-right: 8px;
                    color: rgb(60, 60, 60);
                    font-weight: bold;
                }

                .product-price {
                    font-size: 0.95em;
                    color: rgb(70, 70, 70);
                }
            }

            .subtotal {
                font-weight: bold;
            }
        }
    }

    .totalPrice {
        padding: 10px;
        padding-top: 15px;
        padding-bottom: 12px;
        text-align: end;
        font-weight: bold;
        font-size: 1.2em;
    }
`