import styled from 'styled-components'
import { Theme } from '../../services/Auth/AuthService'

interface IStyledTopBar {
    isCartEmpty: boolean
    theme: Theme
}

export const StyledTopBar = styled.div<IStyledTopBar>`
    height: 75px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.color};
    position: fixed;
    z-index: 1000;

    div.menu-sessions {
        display: flex;
        justify-content: space-between;
        height: 100%;
    }

    div.icon-session {
      height: 100%;
      padding: 12px;
      overflow: hidden;
      width: 114px;
    }

    div.icon-session img {
      height: 100%;
      border-radius: 3px;
    }

    div.left-session {
        display: flex;
        align-items: center;
        font-size: 25px;
        font-weight: 500;
        padding: 15px;
        color: ${props => props.theme.fontColor};
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
            font-weight: 500;
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
                color: ${props => props.theme.fontColor};
                cursor: pointer;
            }
        }

        .bill-icon {
            font-size: 26px;
        }

        .cart-icon {
            cursor: pointer;
            background-color: ${props => props.isCartEmpty ? 'transparent' : props => props.theme.secondaryColor};
            border-radius: 33px;
            transition: 0.25s;
            padding-left: 11px;
            padding-right: 11px;
            font-size: 26px;
            
            svg {
              color: ${props => props.theme.fontColor};
            }

            .cart-price {
              color: ${props => props.isCartEmpty ? props.theme.fontColor : props.theme.tertiaryFontColor};
              font-size: 10px;
            }

            &:hover {
              filter: ${props => props.isCartEmpty ? 'brightness(100%)' : 'brightness(85%)'};
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