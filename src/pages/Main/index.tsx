/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { Cart } from '../../components/Cart'
import { MenuBar } from '../../components/MenuBar'
import { Product } from '../../components/Product'
import { ProductModal } from '../../components/ProductModal'
import { TopBar } from '../../components/TopBar'
import { useCart } from '../../context/CartContext'
import { useMenu } from '../../context/MenuContext'
import { IProduct } from '../../services/Product/Product'
import { StyledMain } from './styles'

export const Main = () => {
  const [selectedProduct, setSelectedProduct] = useState<IProduct>()

  const { collapseCartBar } = useCart()
  const { categoriesWithProducts, categoriesRef, getAllCategoriesWithProducts } = useMenu()

  const handleProductClick = (product: IProduct) => {
    setSelectedProduct(product)
    collapseCartBar()
  }

  useEffect(() => {
    getAllCategoriesWithProducts()
  }, [])

  return (
    <StyledMain>
      <TopBar />
      <MenuBar />
      <div className="content">
        <div className="products-container">
          {categoriesWithProducts.map((category, index) => (
            <>
              {category.products.length > 0 && (
                <div ref={el => categoriesRef.current[index] = el} >
                  <h2 className="category">{category.name}</h2>
                  <div className="products">
                    {category.products.map(product => (
                      <Product
                        key={product.id}
                        product={product}
                        onClick={() => handleProductClick(product)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
      <ProductModal
        selectedProduct={selectedProduct}
        onRequestClose={() => setSelectedProduct(undefined)}
      />
      <Cart />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </StyledMain>
  )
}
