import React from 'react'
import { StyledTopBar } from './styles'
import { BsMegaphone } from 'react-icons/bs'

export const TopBar = () => {
    return (
        <StyledTopBar>
            <div className="left-session">Mesa 1</div>
            <div className="center-session">
                <input type="text" placeholder="Busque pelo produto" />
            </div>
            <div className="right-session">
                <BsMegaphone />
            </div>
        </StyledTopBar>
    )
}
