import { api } from '../api'

interface IProductsWithQuantity {
  productId: number
  quantity: number
}

export interface IOrderWithProducts {
  id: number
  orderStatus: {
    id: number,
    name: string
  }
  productsWithQuantity: IProductWithQuantity[]
}

export interface IProductWithQuantity {
  productId: number
  productName: string
  quantity: number
}

export class OrderService {
  static async create (productsWithQuantity: IProductsWithQuantity[]) {
    await api.post('/Order', {
      productsWithQuantity
    })
  }

  static async getAll () {
    const { data } = await api.get<IOrderWithProducts[]>('/Order/ByBill')

    return data
  }
}
