/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useMenu } from '../../context/MenuContext'
import { ICategory, ICategoryWithProducts } from '../../services/Category/Category'
import { StyledMenuBar } from './styles'

export const MenuBar = () => {
    const { categoriesRef, categoriesWithProducts } = useMenu()

    const [selectedMenu, setSelectedMenu] = useState<ICategoryWithProducts>()

    const isMenuSelected = (category: ICategory) => {
        return selectedMenu === category ? "selected" : ""
    }

    const scrollToCategory = (index: number) => {
        window.scrollTo({ top: categoriesRef.current[index]!.offsetTop - 140, behavior: 'smooth' })
    }

    const handleCategoryClick = (category: ICategoryWithProducts, index: number) => {
        setSelectedMenu(category)
        scrollToCategory(index)
    }

    useEffect(() => {
        if (!!categoriesWithProducts.length) {
            setSelectedMenu(categoriesWithProducts[0])
        }
    }, [categoriesWithProducts])

    return (
        <StyledMenuBar>
            {categoriesWithProducts.map((category, index) => (
                <p
                    key={category.id}
                    className={isMenuSelected(category)}
                    onClick={() => handleCategoryClick(category, index)}
                >
                    {category.name}
                </p>
            ))}
        </StyledMenuBar>
    )
}
