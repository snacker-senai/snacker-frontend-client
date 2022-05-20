import React, { createContext, useContext, useState } from 'react'
import { IProduct } from '../services/Product/Product'

interface ICartProviderProps {
    children: React.ReactNode
}

interface ICartContextProps {
  addProduct(product: ICartProduct): void
  removeProduct(id: number): void
  products: ICartProduct[]
  switchCartExpansion(): void
  collapseCartBar(): void
  expandedCart: boolean
  getCartTotalPrice(): number
}

interface ICartProduct extends IProduct {
  quantity: number
}

export const CartContext = createContext({} as ICartContextProps)

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [products, setProducts] = useState<ICartProduct[]>([])
  const [expandedCart, setExpandedCart] = useState(false)

  const addProduct = (product: ICartProduct) => {
    setProducts([...products, product])
  }

  const removeProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id))    
  }

  const switchCartExpansion = () => {
    setExpandedCart(!expandedCart)
  }

  const collapseCartBar = () => {
    setExpandedCart(false)
  }

  const getCartTotalPrice = () => {
    let totalPrice = 0

    products.forEach((product) => {
        totalPrice += product.price * product.quantity
    })

    return totalPrice
}

  return (
    <CartContext.Provider value={{
      addProduct,
      removeProduct,
      products,
      switchCartExpansion,
      expandedCart,
      collapseCartBar,
      getCartTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)