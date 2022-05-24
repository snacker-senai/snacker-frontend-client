import React, { useState } from 'react'
import { useMenu } from '../../context/MenuContext'
import { ICategory } from '../../services/Category/Category'
import { StyledMenuBar } from './styles'

const categories: ICategory[] = [
    {
        id: 1,
        title: 'Massas'
    },
    {
        id: 2,
        title: 'Bebidas'
    },
    {
        id: 3,
        title: 'Risotos'
    },
    {
        id: 4,
        title: 'Assados'
    },
    {
        id: 5,
        title: 'Saladas'
    },
    {
        id: 6,
        title: 'Hamburgers'
    },
]

export const MenuBar = () => {
    const [selectedMenu, setSelectedMenu] = useState<ICategory>(categories[0])

    const { categoriesRef } = useMenu()

    const isMenuSelected = (category: ICategory) => {
        return selectedMenu === category ? "selected" : ""
    }

    const scrollToCategory = (index: number) => {
        categoriesRef.current[index]!.scrollIntoView({ block: 'start', behavior: 'auto' })

        const scrolledY = window.scrollY
        if (scrolledY) {
            window.scroll(0, scrolledY - 140);
        }
    }

    return (
        <StyledMenuBar>
            {categories.map((category, index) => (
                <p
                    className={isMenuSelected(category)}
                    onClick={() => { setSelectedMenu(category); scrollToCategory(index) }}
                >
                    {category.title}
                </p>
            ))}
        </StyledMenuBar>
    )
}
