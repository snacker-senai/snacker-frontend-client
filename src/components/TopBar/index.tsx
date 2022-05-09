import React from 'react'
import { StyledTopBar } from './styles'
import { BsSearch, BsMegaphone } from 'react-icons/bs'

export const TopBar = () => {
    return (
        <StyledTopBar>
            <div className="left-session">Mesa 1</div>
            <div className="right-session">
                <BsSearch />
                <BsMegaphone />
            </div>
        </StyledTopBar>
    )
}
