import React from 'react'
import { useCart } from '../../context/CartContext'
import { StyledCart } from './styles'


export const Cart = () => {
    const { products, expandedCart } = useCart()

    console.log(products)

    return (
        <StyledCart expandedSidebar={expandedCart}>
            {products.map(product => (
                <div>
                    {product.name} - {product.price}
                </div>
            ))}
        </StyledCart>
    )
}
