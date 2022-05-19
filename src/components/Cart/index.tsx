import React from 'react'
import { useCart } from '../../context/CartContext'
import { StyledCart } from './styles'


export const Cart = () => {
    const { products, expandedCart } = useCart()

    const { collapseCartBar } = useCart()

    return (
        <StyledCart expandedSidebar={expandedCart}>
            <div className="invisible-area" onClick={collapseCartBar}></div>
            <div className="cart-bar">
                {products.map(product => (
                    <div>
                        {product.name} - {product.price}
                    </div>
                ))}
            </div>
        </StyledCart>
    )
}
