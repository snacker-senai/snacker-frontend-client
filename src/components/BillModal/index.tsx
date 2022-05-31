import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import Modal from 'react-modal'
import { useMenu } from '../../context/MenuContext'
import { formatToBrazilianReal } from '../../helpers/format'
import { IBill } from '../../services/Bill/Bill'
import { BillService } from '../../services/Bill/BillService'
import { IOrder } from '../../services/Order/Order'
import { StyledBillModal } from './styles'

const customStyles = {
  overlay: {
    background: "rgba(0, 0, 0, 0.25)"
  },
  content: {
    width: '100%',
    maxWidth: '700px',
    // left:
    // transform: 'translate(-50%, -50%)',
  }
}

export const BillModal = () => {
  const { isBillModalVisible, setIsBillModalVisible } = useMenu()
  const [bill, setBill] = useState<IBill>()

  const getCurrentBill = async () => {
    const bill = await BillService.getCurrentBill()
    setBill(bill)
  }

  const renderBillProducts = (order: IOrder) => {
    return (
      <div className="order-card">
        {order.products.map((product) => (
          <div className="product-info">
            <div className="product-name">{product.quantity}x {product.name}</div>
            <div className="product-price">R$ {formatToBrazilianReal(product.price * product.quantity)}</div>
          </div>
        ))}
      </div>
    )
  }

  useEffect(() => {
    if (isBillModalVisible) {
      getCurrentBill()
    }
  }, [isBillModalVisible])

  return (
      <Modal
        isOpen={isBillModalVisible}
        contentLabel="Teste"
        style={customStyles}
      >
        <StyledBillModal>
        <div className="header">
              <div></div>
              <div className="modal-title">Lista de pedidos</div>
              <div className="close-button" onClick={() => setIsBillModalVisible(false)}>
                <FaTimes />
              </div>
            </div>
           <div className="content">
            {bill?.orders.map(renderBillProducts)}
          </div>
        </StyledBillModal>
      </Modal>
  )
}
