import React, { useState } from 'react'
import { StyledMenuBar } from './styles'

export const MenuBar = () => {
    const [selectedMenu, setSelectedMenu] = useState(0)

    const isMenuSelected = (menu: number) => {
        return selectedMenu === menu ? "selected" : ""
    }

    return (
        <StyledMenuBar>
            <p 
                className={isMenuSelected(0)}
                onClick={() => setSelectedMenu(0)}
            >
                Bebidas
            </p>
            <p 
                className={isMenuSelected(1)}
                onClick={() => setSelectedMenu(1)}
            >
                Massas
            </p>
            <p 
                className={isMenuSelected(2)}
                onClick={() => setSelectedMenu(2)}
            >
                Risotos
            </p>
            <p 
                className={isMenuSelected(3)}
                onClick={() => setSelectedMenu(3)}
            >
                Assados
            </p>
        </StyledMenuBar>
    )
}
