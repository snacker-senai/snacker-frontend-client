import styled from 'styled-components'

export const StyledBillModal = styled.div`
    height: 100%;
    width: 650px;
    max-width: calc(100vw - 75px);
    max-height: calc(100vh - 42px);
    z-index: 10000;
    /* background-color: red; */

    .header {
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        font-size: 1.28em;
        color: rgb(55, 55, 55);
        margin-top: 7px;
        margin-bottom: 30px;
        
        .close-button {
            cursor: pointer;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 15px;

        .order-card {
            padding: 16px;
            padding-top: 18px;
            padding-bottom: 18px;
            margin-bottom: 10px;
            background-color: rgb(253, 253, 253);
            border: 1px solid rgb(241, 241, 241);
            border-radius: 3px;
            box-shadow: 0px 6px 15px 1px rgba(0,0,0,0.025);

            .product-info {
                display: flex;
                align-items: center;
                padding: 2px;
                
                .product-name {
                    font-size: 1.05em;
                    margin-right: 8px;
                    color: rgb(75, 75, 75);
                    font-weight: 600;
                }

                .product-price {
                    font-size: 1em;
                    color: rgb(80, 80, 80);
                }
            }

            .order-status {
                font-weight: 600;
                font-size: 0.95em;
                padding: 2px;
                padding-left: 5px;
                padding-right: 5px;
                border-radius: 4px;
            }

            .status-1 {
                background: #80B0FF;
                color: #142239;
            }

            .status-2 {
                background: #EAC969;
                color: #84641C;
            }

            .status-3 {
                background: #58CEA4;
                color: #284A3D;
            }

            .subtotal {
                font-weight: 600;
                color: rgb(60, 60, 60);
                font-size: 1.02em;
            }
        }
    }

    .total-price {
        padding-top: 21px;
        padding-bottom: 35px;
        text-align: end;
        
        span {
            background: white;
            padding: 9px;
            padding-left: 14px;
            padding-right: 14px;
            border-radius: 8px;
            border: 1px solid rgb(239, 239, 239);
            box-shadow: 0px 6px 15px 1px rgba(0,0,0,0.04);
            font-weight: 600;
            font-size: 1.22em;
            color: rgb(60, 60, 60);
        }
    }

    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px;
    }
`