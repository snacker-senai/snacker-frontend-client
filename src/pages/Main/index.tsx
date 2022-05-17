import React, { useState } from 'react'
import { MenuBar } from '../../components/MenuBar'
import { Product } from '../../components/Product'
import { ProductModal } from '../../components/ProductModal'
import { TopBar } from '../../components/TopBar'
import { IProduct } from '../../services/Product/Product'
import { StyledMain } from './styles'

const products: IProduct[] = [
  {
    id: 1,
    name: 'Lasagna',
    description: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
    price: 19.90,
    image: "https://img.youtube.com/vi/FrdumyhYaZY/maxresdefault.jpg",
    productCategory: {
      id: 1,
      name: "Massas"
    }
  },
  {
    id: 2,
    name: 'Macarrão',
    description: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
    price: 24.90,
    image: "https://img.youtube.com/vi/FrdumyhYaZY/maxresdefault.jpg",
    productCategory: {
      id: 1,
      name: "Massas"
    }
  }
]

export const Main = () => {
  const [selectedProduct, setSelectedProduct] = useState<IProduct>()

  return (
    <StyledMain>
      <TopBar />
      <MenuBar />
      <div className="content">
        {products.map(product => (
          <Product
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>
      <ProductModal
        selectedProduct={selectedProduct}
        onRequestClose={() => setSelectedProduct(undefined)}
      />
    </StyledMain>
  )
}
