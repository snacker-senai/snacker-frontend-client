export interface IOrder {
  id: number
  products: {
    id: number
    name: string
    price: number
    quantity: number
  }[]
}