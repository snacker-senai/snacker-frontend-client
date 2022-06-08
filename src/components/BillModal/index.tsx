import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { TailSpin } from 'react-loader-spinner'
import Modal from 'react-modal'
import { useMenu } from '../../context/MenuContext'
import { formatToBrazilianReal } from '../../helpers/format'
import { IOrderWithProducts, IProductWithQuantity, OrderService } from '../../services/Order/OrderService'
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
  const [orders, setOrders] = useState<IOrderWithProducts[]>([])

  const getCurrentBill = async () => {
    const orders = await OrderService.getAll()
    setOrders(orders)
  }

  const getTotalPrice = () => {
    let totalPrice = 0

    orders.forEach(order => {
      order.productsWithQuantity.forEach(product => totalPrice += product.price * product.quantity)
    })

    return totalPrice
  }

  const renderBillProducts = (products: IProductWithQuantity[]) => {
    let subtotal = 0

    products.forEach(product => subtotal += product.price * product.quantity)

    return (
      <div className="order-card">
        {products.map((product) => (
          <div className="product-info">
            <div className="product-name">{product.quantity}x {product.productName}</div>
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
            {!!orders.length && (
              <>
                {orders.map(order => renderBillProducts(order.productsWithQuantity))}
              </>
            )}
            {!orders.length && (
              <div className="loading">
                <TailSpin color="var(--blue)" height={80} width={80} />
              </div>
            )}
          </div>
          {!!orders.length && (
            <div className="totalPrice">
              Total: R$ {formatToBrazilianReal(getTotalPrice())}
            </div>
          )}
        </StyledBillModal>
      </Modal>
  )
}
