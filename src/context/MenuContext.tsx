import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { CategoryService } from '../services/Category/CategoryService'

type CategoryWithProduct = {
  id: number
  name: string
  products: {
    id: number
    name: string
    description: string
    price: number
    image: string
  }[]
}

interface IMenuProviderProps {
    children: React.ReactNode
}

interface IMenuContextProps {
  categoriesWithProducts: CategoryWithProduct[]
  search(value: string): void
  categoriesRef: React.MutableRefObject<(HTMLDivElement | null)[]>
  getAllCategoriesWithProducts(): void
  isBillModalVisible: boolean
  setIsBillModalVisible(value: boolean): void
  isDesktop: boolean
}

export const MenuContext = createContext({} as IMenuContextProps)

export const MenuProvider = ({ children }: IMenuProviderProps) => {
  /** Todas as categorias e produtos retornados da API */
  const [allCategoriesWithProducts, setAllCategoriesWithProducts] = useState<CategoryWithProduct[]>([])

  /** Categorias e produtos que serão mostrados na tela */
  const [categoriesWithProducts, setCategoriesWithProducts] = useState<CategoryWithProduct[]>([])

  const [isBillModalVisible, setIsBillModalVisible] = useState(false)

  const categoriesRef = useRef<Array<HTMLDivElement | null>>([])

  /** Responsividade */
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 768)

  useEffect(() => {
    const updateMedia = () => setIsDesktop(window.innerWidth > 768)
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  useEffect(() => {
    categoriesRef.current = categoriesRef.current.slice(0, categoriesWithProducts.length);
  }, [categoriesWithProducts])

  const search = (search: string) => {
    if (search === '') {
      setCategoriesWithProducts(allCategoriesWithProducts)
      return
    }

    const regex = new RegExp(search.toLowerCase())

    const mappedCategoriesWithProducts = allCategoriesWithProducts.map(category => {
      return {
        id: category.id,
        name: category.name,
        products: category.products.filter(product => regex.test(product.name.toLowerCase()))
      }
    })

    setCategoriesWithProducts(mappedCategoriesWithProducts)
  }

  const getAllCategoriesWithProducts = async () => {
    const categoriesWithProducts = await CategoryService.getAllCategoriesWithProducts()

    setCategoriesWithProducts(categoriesWithProducts)
    setAllCategoriesWithProducts(categoriesWithProducts)
  }

  return (
    <MenuContext.Provider value={{
        categoriesWithProducts,
        search,
        categoriesRef,
        getAllCategoriesWithProducts,
        isBillModalVisible,
        setIsBillModalVisible,
        isDesktop
    }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => useContext(MenuContext)