import React, { useState } from 'react'
import { Cart } from '../../components/Cart'
import { MenuBar } from '../../components/MenuBar'
import { Product } from '../../components/Product'
import { ProductModal } from '../../components/ProductModal'
import { TopBar } from '../../components/TopBar'
import { useCart } from '../../context/CartContext'
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
  },
  {
    id: 3,
    name: 'ifone xR',
    description: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
    price: 9900.90,
    image: " https://www.cnet.com/a/img/resize/bc5d9ad22f31db759158b599cdbf990fbeae4836/hub/2013/09/18/1bf55de0-3c65-11e3-bd7c-14feb5ca9861/iPhone5s_35781409_01.jpg?auto=webp&width=1092",
    productCategory: {
      id: 1,
      name: "Massas"
    }
  }
]

export const Main = () => {
  const [selectedProduct, setSelectedProduct] = useState<IProduct>()

  const { collapseCartBar } = useCart()

  const handleProductClick = (product: IProduct) => {
    setSelectedProduct(product)
    collapseCartBar()
  }

  return (
    <StyledMain>
      <TopBar />
      <MenuBar />
      <div className="content">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>
      <ProductModal
        selectedProduct={selectedProduct}
        onRequestClose={() => setSelectedProduct(undefined)}
      />
      <Cart />
    </StyledMain>
  )
}
