import { IOrder } from "../Order/Order"

export interface IBill {
  id: number
  active: boolean
  orders: IOrder[]
}