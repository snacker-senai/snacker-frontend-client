import React, { useState } from 'react'
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

    const isMenuSelected = (category: ICategory) => {
        return selectedMenu === category ? "selected" : ""
    }

    return (
        <StyledMenuBar>
            {categories.map(category => (
                <p
                    className={isMenuSelected(category)}
                    onClick={() => setSelectedMenu(category)}
                >
                    {category.title}
                </p>
            ))}
        </StyledMenuBar>
    )
}
