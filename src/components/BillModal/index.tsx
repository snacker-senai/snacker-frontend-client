import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { TailSpin } from 'react-loader-spinner'
import Modal from 'react-modal'
import { useMenu } from '../../context/MenuContext'
import { formatToBrazilianReal } from '../../helpers/format'
import { IOrderStatus, IOrderWithProducts, IProductWithQuantity, OrderService } from '../../services/Order/OrderService'
import { StyledBillModal } from './styles'

const customStyles = {
  overlay: {
    background: "rgba(0, 0, 0, 0.25)",
    zIndex: 100000
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100vw',
    maxHeight: '90%',
    zIndex: 100000,
    background: 'rgb(246, 246, 246)'
  }
}

export const BillModal = () => {
  const [orders, setOrders] = useState<IOrderWithProducts[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const { isBillModalVisible, setIsBillModalVisible, isDesktop } = useMenu()

  const getCurrentBill = async () => {
    setIsLoading(true)
    const orders = await OrderService.getAll()
    setOrders(orders)
    setIsLoading(false)
  }

  const getTotalPrice = () => {
    let totalPrice = 0

    orders.forEach(order => {
      order.productsWithQuantity.forEach(product => totalPrice += product.price * product.quantity)
    })

    return totalPrice
  }

  const renderBillProducts = (products: IProductWithQuantity[], orderStatus: IOrderStatus) => {
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
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '14px' }}>
          <div className={`order-status status-${orderStatus.id}`}>{orderStatus.name}</div>
          <div className="subtotal">Subtotal R$ {formatToBrazilianReal(subtotal)}</div>
        </div>
      </div>
    )
  }

  const modalStyles = {
    ...customStyles,
    content: {
      ...customStyles.content,
      width: isDesktop ? 'auto' : '100%',
      borderRadius: isDesktop ? '3px' : '0px',
      maxHeight: isDesktop ? '90%' : '100%'
    }
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
        style={modalStyles}
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
            {(!!orders.length && !isLoading) && (
              <>
                {orders.map(order => renderBillProducts(order.productsWithQuantity, order.orderStatus))}
              </>
            )}
            {isLoading && (
              <div className="loading">
                <TailSpin color="var(--blue)" height={80} width={80} />
              </div>
            )}
            {(!orders.length && !isLoading) && (
              <div className="loading">
                Nenhum pedido encontrado
              </div>
            )}
          </div>
          {(!!orders.length && !isLoading) && (
            <div className="total-price">
              <span>
                Total: R$ {formatToBrazilianReal(getTotalPrice())}
              </span>
            </div>
          )}
        </StyledBillModal>
      </Modal>
  )
}
