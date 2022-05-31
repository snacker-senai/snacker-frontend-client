import React from 'react'
import { StyledTopBar } from './styles'
import { BsMegaphone, BsBag, BsLayoutTextSidebarReverse } from 'react-icons/bs'
import { useCart } from '../../context/CartContext'
import { formatToBrazilianReal } from '../../helpers/format'
import { useMenu } from '../../context/MenuContext'
import { useAuth } from '../../context/AuthContext'

export const TopBar = () => {
    const { switchCartExpansion, products, getCartTotalPrice } = useCart()
    const { search, setIsBillModalVisible } = useMenu()
    const { user } = useAuth()
    
    return (
        <StyledTopBar isCartEmpty={!products.length}>
            <div className="left-session">Mesa {user?.number}</div>
            <div className="center-session">
                <input type="text" placeholder="Busque pelo produto" onChange={(e) => search(e.target.value)} />
            </div>
            <div className="right-session">
                <span>
                    <BsMegaphone />
                </span>
                <span onClick={() => setIsBillModalVisible(true)} className="bill-icon">
                    <BsLayoutTextSidebarReverse/>
                </span>
                <span className="cart-icon" onClick={switchCartExpansion}>
                    <BsBag />
                    {!!products.length && (
                        <span className="cart-price">R$ {formatToBrazilianReal(getCartTotalPrice())}</span>
                    )}
                </span>
            </div>
        </StyledTopBar>
    )
}
