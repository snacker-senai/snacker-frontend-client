import React from 'react'
import Modal from 'react-modal'
import { StyledProductModal } from './styles'
import { FaTimes } from 'react-icons/fa'
import { IProduct } from '../../services/Product/Product'

interface IProductModalProps {
  onRequestClose: () => void
  selectedProduct?: IProduct
}

const customStyles = {
  overlay: {
    background: "rgba(0, 0, 0, 0.25)"
  }
}

export const ProductModal = ({ onRequestClose, selectedProduct }: IProductModalProps) => {
    return (
        <Modal
            isOpen={!!selectedProduct}
            contentLabel="Teste"
            style={customStyles}
        >
          <StyledProductModal>
            <div className="header">
              <div></div>
              <div className="modal-title">{selectedProduct?.name}</div>
              <div className="close-button" onClick={onRequestClose}>
                <FaTimes />
              </div>
            </div>
          </StyledProductModal>
        </Modal>
    )
}
