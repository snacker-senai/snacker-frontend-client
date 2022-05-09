import React, { useState } from 'react'
import { StyledBottomBar } from './styles'
import { BsBook } from 'react-icons/bs'
import { RiFileList2Line } from 'react-icons/ri'

export const BottomBar = () => {
    const [selectedMenu, setSelectedMenu] = useState(0)

    return (
        <StyledBottomBar>
            <div 
                className={"menu-item " + (selectedMenu !== 0  ? "disabled" : "")}
                onClick={() => setSelectedMenu(0)}
            >
                <BsBook />
                <p>Cardápio</p>
            </div>
            <div
                className={"menu-item " + (selectedMenu !== 1 ? "disabled" : "")}
                onClick={() => setSelectedMenu(1)}
            >
                <RiFileList2Line />
                <p>Pedidos</p>
            </div>
        </StyledBottomBar>
    )
}
