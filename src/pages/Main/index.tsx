/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { BillModal } from '../../components/BillModal'
import { Cart } from '../../components/Cart'
import { Loading } from '../../components/Loading'
import { MenuBar } from '../../components/MenuBar'
import { Product } from '../../components/Product'
import { ProductModal } from '../../components/ProductModal'
import { TopBar } from '../../components/TopBar'
import { useAuth } from '../../context/AuthContext'
import { useCart } from '../../context/CartContext'
import { useMenu } from '../../context/MenuContext'
import { IProduct } from '../../services/Product/Product'
import { StyledMain } from './styles'
import { FiSearch } from 'react-icons/fi'

export const Main = () => {
  const [selectedProduct, setSelectedProduct] = useState<IProduct>()

  const { collapseCartBar } = useCart()
  const { user } = useAuth()
  const { categoriesWithProducts, categoriesRef, getAllCategoriesWithProducts, search, isDesktop } = useMenu()

  const handleProductClick = (product: IProduct) => {
    setSelectedProduct(product)
    collapseCartBar()
  }

  const showLoading = categoriesWithProducts.length < 1 || !user?.number

  useEffect(() => {
    getAllCategoriesWithProducts()
  }, [])

  return (
    <StyledMain>
      <Loading visible={showLoading} />
      <TopBar />
      <MenuBar />
      <div className="content">
        {!isDesktop && (
          <div className="input-container">
            <input type="text" placeholder="Busque pelo produto" onChange={(e) => search(e.target.value)} />
            <FiSearch />
          </div>
        )}
        <div className="products-container">
          {categoriesWithProducts.map((category, index) => (
            <React.Fragment key={category.id}>
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
            </React.Fragment>
          ))}
        </div>
      </div>
      <ProductModal
        selectedProduct={selectedProduct}
        onRequestClose={() => setSelectedProduct(undefined)}
      />
      <BillModal />
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
