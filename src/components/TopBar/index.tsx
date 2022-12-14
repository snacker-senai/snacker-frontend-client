import { StyledTopBar } from './styles'
import { IoCart } from 'react-icons/io5'
import { IoIosListBox } from 'react-icons/io'
import { useCart } from '../../context/CartContext'
import { formatToBrazilianReal } from '../../helpers/format'
import { useMenu } from '../../context/MenuContext'
import { useAuth } from '../../context/AuthContext'

export const TopBar = () => {
    const { switchCartExpansion, products, getCartTotalPrice } = useCart()
    const { setIsBillModalVisible } = useMenu()
    const { user, theme } = useAuth()
    
    return (
        <StyledTopBar isCartEmpty={!products.length}>
            <div className="menu-sessions">
                <div className="icon-session">
                    {theme.icon && (
                        <img src={theme.icon} alt="Ícone" />
                    )}
                </div>
                <div className="left-session">Mesa {user?.number}</div>
                <div className="right-session">
                    <span onClick={() => setIsBillModalVisible(true)} className="bill-icon">
                        <IoIosListBox />
                    </span>
                    <span className="cart-icon" onClick={switchCartExpansion}>
                        <IoCart />  
                        {!!products.length && (
                            <span className="cart-price">R$ {formatToBrazilianReal(getCartTotalPrice())}</span>
                        )}
                    </span>
                </div>
            </div>
        </StyledTopBar>
    )
}
