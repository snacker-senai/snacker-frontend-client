/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useMenu } from '../../context/MenuContext'
import { ICategory, ICategoryWithProducts } from '../../services/Category/Category'
import { StyledMenuBar } from './styles'

export const MenuBar = () => {
    const { categoriesRef, categoriesWithProducts } = useMenu()

    const [selectedMenu, setSelectedMenu] = useState<ICategoryWithProducts>(categoriesWithProducts[0])

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
