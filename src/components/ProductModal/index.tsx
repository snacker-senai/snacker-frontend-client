import React, { useState } from 'react'
import Modal from 'react-modal'
import { StyledProductModal } from './styles'
import { FaTimes } from 'react-icons/fa'
import { IProduct } from '../../services/Product/Product'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'
import { formatToBrazilianReal } from '../../helpers/format'
import { emitInfoToast } from '../../helpers/toast'
import { useMenu } from '../../context/MenuContext'

interface IProductModalProps {
  onRequestClose: () => void
  selectedProduct?: IProduct
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 100000,
    padding: 0,
    width: '100%',
    height: '100%',
    border: 0,
    borderRadius: 0
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.25)",
    zIndex: 100000
  }
}

export const ProductModal = ({ onRequestClose, selectedProduct }: IProductModalProps) => {
    const [productQuantity, setProductQuantity] = useState(1)
    const [productDetails, setProductDetails] = useState('')

    const { addProduct } = useCart()
    const { isDesktop } = useMenu()

    const increaseProductQuantity = () => {
      setProductQuantity(productQuantity + 1)
    }

    const decreaseProductQuantity = () => {
      if (productQuantity > 1) {
        setProductQuantity(productQuantity - 1)
      }
    }

    const handleAddProductOnCart = () => {
      addProduct({ ...selectedProduct!, quantity: productQuantity, details: productDetails })
      onRequestClose()
      setProductQuantity(1)
      setProductDetails('')
      emitInfoToast('Produto adicionado na sacola!')
    }

    const modalStyles = {
      ...customStyles,
      content: {
        ...customStyles.content,
        maxWidth: isDesktop ? '500px' : '100vw',
        height: isDesktop ? '90%' : '100%',
        borderRadius: isDesktop ? '4px' : '0px'
      }
    }

    return (
        <Modal
          isOpen={!!selectedProduct}
          contentLabel="Teste"
          style={modalStyles}
        >
          <StyledProductModal>
            <div className="header">
              <div className="close-button" onClick={onRequestClose}>
                <FaTimes />
              </div>
            </div>
            <div className="content">
              <div className="left-session">
                <div className="shadow"></div>
                <img src={selectedProduct?.image} alt="imagem" />
              </div>
              <div className="right-session">
                <div className="product-title">
                  {selectedProduct?.name}
                </div>
                <div className="product-description">
                  {selectedProduct?.description}
                </div>
                <div className="comment-container">
                  <span>Algum comentário?</span>
                  <textarea 
                    className="comment-input" 
                    placeholder="Ex: tirar a cebola, maionese à parte, etc." 
                    rows={3}
                    value={productDetails}
                    onChange={(e) => setProductDetails(e.target.value)}
                  >
                  </textarea>
                </div>
                <div className="footer">
                  <div className="quantity-container">
                    <span onClick={decreaseProductQuantity} className={productQuantity === 1 ? "disabled minus" : "minus"}>
                      <FaMinus />
                    </span>
                    <span className="quantity">
                      {productQuantity}
                    </span>
                    <span className="plus" onClick={increaseProductQuantity}>
                      <FaPlus />
                    </span>
                  </div>
                  <button className="add-button" onClick={handleAddProductOnCart}>
                    Adicionar R$ {formatToBrazilianReal(productQuantity * (selectedProduct?.price || 0))} 
                  </button>
                </div>
              </div>
            </div>
          </StyledProductModal>
        </Modal>
    )
}
