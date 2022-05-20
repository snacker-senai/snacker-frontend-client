import React from 'react'
import { StyledTopBar } from './styles'
import { BsMegaphone } from 'react-icons/bs'
import { BsBag } from 'react-icons/bs'
import { useCart } from '../../context/CartContext'
import { formatToBrazilianReal } from '../../helpers'

export const TopBar = () => {
    const { switchCartExpansion, products, getCartTotalPrice } = useCart()
    
    return (
        <StyledTopBar isCartEmpty={!products.length}>
            <div className="left-session">Mesa 1</div>
            <div className="center-session">
                <input type="text" placeholder="Busque pelo produto" />
            </div>
            <div className="right-session">
                <span>
                    <BsMegaphone />
                </span>
                <span className="cart-icon" onClick={switchCartExpansion}>
                    <BsBag />
                    {!!products.length && (
                        <span className="cart-price">R$ {formatToBrazilianReal(getCartTotalPrice())}</span>
                    )}
                </span>
            </div>
        </StyledTopBar>
    )
}
