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
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100vw'
  }
}

export const BillModal = () => {
  const { isBillModalVisible, setIsBillModalVisible } = useMenu()
  const [bill, setBill] = useState<IBill>()

  const getCurrentBill = async () => {
    const bill = await BillService.getCurrentBill()
    setBill(bill)
  }

  const getTotalPrice = () => {
    let totalPrice = 0

    bill?.orders.forEach(order => {
      order.products.forEach(product => totalPrice += product.price * product.quantity)
    })

    return totalPrice
  }

  const renderBillProducts = (order: IOrder) => {
    let subtotal = 0

    order.products.forEach(product => subtotal += product.price * product.quantity)

    return (
      <div className="order-card">
        {order.products.map((product) => (
          <div className="product-info">
            <div className="product-name">{product.quantity}x {product.name}</div>
            <div className="product-price">R$ {formatToBrazilianReal(product.price * product.quantity)}</div>
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <div className="subtotal">Subtotal R$ {formatToBrazilianReal(subtotal)}</div>
        </div>
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
          <div className="totalPrice">
            Total: R$ {formatToBrazilianReal(getTotalPrice())}
          </div>
        </StyledBillModal>
      </Modal>
  )
}
