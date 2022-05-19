import React, { createContext, useContext, useState } from 'react'
import { IProduct } from '../services/Product/Product'

interface ICartProviderProps {
    children: React.ReactNode
}

interface ICartContextProps {
  addProduct(product: IProduct): void
  products: IProduct[]
  switchCartExpansion(): void
  expandedCart: boolean
}

export const CartContext = createContext({} as ICartContextProps)

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [expandedCart, setExpandedCart] = useState(false)

  const addProduct = (product: IProduct) => {
    setProducts([...products, product])
  }

  const switchCartExpansion = () => {
    setExpandedCart(!expandedCart)
  }

  return (
    <CartContext.Provider value={{
      addProduct,
      products,
      switchCartExpansion,
      expandedCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)