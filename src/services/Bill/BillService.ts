import { IBill } from "./Bill";

export class BillService {
  static async getCurrentBill (): Promise<IBill> {
    return {
      id: 1,
      active: true,
      orders: [
        {
          id: 1,
          products: [
            {
              id: 1,
              name: 'Pizza',
              price: 14.90,
              quantity: 2
            },
            {
              id: 2,
              name: 'Leite',
              price: 9.45,
              quantity: 1
            }
          ]
        },
        {
          id: 2,
          products: [
            {
              id: 2,
              name: 'Hamburger',
              price: 26.90,
              quantity: 1
            }
          ]
        }
      ]
    }
  }
}
