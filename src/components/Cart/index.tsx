import React from 'react'
import { useCart } from '../../context/CartContext'
import { formatToBrazilianReal } from '../../helpers/format'
import { StyledCart } from './styles'
import { FaTimes } from 'react-icons/fa'
import { emitSuccessToast } from '../../helpers/toast'
import { OrderService } from '../../services/Order/OrderService'


export const Cart = () => {
    const { products, expandedCart, collapseCartBar, removeProduct, getCartTotalPrice, clearCart } = useCart()

    const handleFinishOrder = async () => {
        try {
            const productsWithQuantity = products.map(product => ({
                productId: product.id,
                quantity: product.quantity
            }))

            await OrderService.create(productsWithQuantity)

            emitSuccessToast('Pedido realizado com sucesso!')
            collapseCartBar()
            clearCart()
        } catch (error) {
            alert(error)
        }
    }

    return (
        <StyledCart expandedSidebar={expandedCart} isCartEmpty={!products.length}>
            <div className="invisible-area" onClick={collapseCartBar}></div>
            <div className="cart-bar">
                {products.length > 0 && (
                    <div className="cart-header">
                        <span>Seu pedido</span>
                        <span onClick={collapseCartBar}><FaTimes /></span>
                    </div>
                )}
                {products.length > 0 && (
                    <>
                        <div className="product-list">
                            {products.map(product => (
                                <div className="product-container" key={product.id}>
                                    <div className="product-information">
                                        <div className="product-name">
                                            {product.quantity}x {product.name}
                                        </div>
                                        <div className="product-price">
                                            R$ {formatToBrazilianReal(product.price * product.quantity)}
                                        </div>
                                    </div>
                                    <div className="product-options">
                                        <span className="edit">Editar</span>
                                        <span className="remove" onClick={() => removeProduct(product.id)}>Remover</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-information">
                            <div className="cart-total-price">
                                <span>Total</span>
                                <span>R$ {formatToBrazilianReal(getCartTotalPrice())}</span>
                            </div>
                            <button className="order-button" onClick={handleFinishOrder}>Realizar pedido</button>
                        </div>
                    </>
                )}
                {products.length < 1 && (
                    <>
                        <span><b>Sua escola está vazia</b></span>
                        <span>Adicione itens</span>
                    </>
                )}
            </div>
        </StyledCart>
    )
}
