import React, { createContext, useContext, useEffect, useRef, useState } from 'react'

const categoriesWithProductsArray = [
    {
      id: 1,
      name: "Massas",
      products: [
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
    },
    {
      id: 2,
      name: "Saladas",
      products: [
        {
          id: 1,
          name: 'Alface',
          description: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
          price: 9.90,
          image: "https://3.bp.blogspot.com/-ctmQrsFnXjg/WXqdIOVOtKI/AAAAAAAACq4/aWDg99uBTto4-eIMhewtVbh9bym9gkGWQCLcBGAs/s1600/alface-beneficios-e-propriedades.jpg",
          productCategory: {
            id: 1,
            name: "Massas"
          }
        },
      ]
    },
    {
      id: 2,
      name: "Risotos",
      products: [
        {
          id: 1,
          name: 'Alface',
          description: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
          price: 9.90,
          image: "https://3.bp.blogspot.com/-ctmQrsFnXjg/WXqdIOVOtKI/AAAAAAAACq4/aWDg99uBTto4-eIMhewtVbh9bym9gkGWQCLcBGAs/s1600/alface-beneficios-e-propriedades.jpg",
          productCategory: {
            id: 1,
            name: "Massas"
          }
        },
      ]
    },
    {
      id: 2,
      name: "Sopas",
      products: [
        {
          id: 1,
          name: 'Alface',
          description: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
          price: 9.90,
          image: "https://3.bp.blogspot.com/-ctmQrsFnXjg/WXqdIOVOtKI/AAAAAAAACq4/aWDg99uBTto4-eIMhewtVbh9bym9gkGWQCLcBGAs/s1600/alface-beneficios-e-propriedades.jpg",
          productCategory: {
            id: 1,
            name: "Massas"
          }
        },
      ]
    }
  ]

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
}

export const MenuContext = createContext({} as IMenuContextProps)

export const MenuProvider = ({ children }: IMenuProviderProps) => {
  const [categoriesWithProducts, setCategoriesWithProducts] = useState<CategoryWithProduct[]>(categoriesWithProductsArray)

  const categoriesRef = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    categoriesRef.current = categoriesRef.current.slice(0, categoriesWithProducts.length);
  }, [categoriesWithProducts])

  const search = (search: string) => {
    if (search === '') {
      setCategoriesWithProducts(categoriesWithProductsArray)
      return
    }

    const regex = new RegExp(search.toLowerCase())

    const mappedCategoriesWithProducts = categoriesWithProducts.map(category => {
      return {
        id: category.id,
        name: category.name,
        products: category.products.filter(product => regex.test(product.name.toLowerCase()))
      }
    })

    setCategoriesWithProducts(mappedCategoriesWithProducts)
  }

  return (
    <MenuContext.Provider value={{
        categoriesWithProducts,
        search,
        categoriesRef
    }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => useContext(MenuContext)