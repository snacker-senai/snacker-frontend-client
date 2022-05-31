import styled from 'styled-components'

export const StyledBillModal = styled.div`
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
        .order-card {
            padding: 15px;
            margin-bottom: 10px;
            background-color: rgb(242, 242, 242);

            .product-info {
                display: flex;
                align-items: center;
                padding: 2px;
                
                .product-name {
                    font-size: 1.18em;
                    margin-right: 8px;
                    color: rgb(60, 60, 60);
                    font-weight: bold;
                }

                .product-price {
                    font-size: 1em;
                    color: rgb(70, 70, 70);
                }
            }
        }
    }
`