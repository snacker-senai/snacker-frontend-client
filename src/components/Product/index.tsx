import React from 'react'
import { IProduct } from '../../services/Product/Product'
import { StyledProduct } from './styles'

interface IProductProps {
    onClick: () => void
    product: IProduct
}

export const Product = ({ onClick, product }: IProductProps) => {
    return (
        <StyledProduct onClick={onClick}>
            <div className="left-session">
                <p className="title">{product.name}</p>
                <p className="description">{product.description}</p>
                <p className="price">R$ {product.price}</p>
            </div>
            <div className="right-session">
                <img src={product.image} alt="lasanha"></img>
            </div>
        </StyledProduct>
    )
}