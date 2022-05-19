import React from 'react'
import { StyledTopBar } from './styles'
import { BsMegaphone } from 'react-icons/bs'
import { BsBag } from 'react-icons/bs'
import { useCart } from '../../context/CartContext'

export const TopBar = () => {
    const { switchCartExpansion } = useCart()
    
    return (
        <StyledTopBar>
            <div className="left-session">Mesa 1</div>
            <div className="center-session">
                <input type="text" placeholder="Busque pelo produto" />
            </div>
            <div className="right-session">
                <BsMegaphone />
                <BsBag onClick={switchCartExpansion} />
            </div>
        </StyledTopBar>
    )
}
