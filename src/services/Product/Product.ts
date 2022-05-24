export interface IProduct {
    id: number
    name: string
    description: string
    price: number
    image: string
    productCategory?: {
        id: number
        name: string
    }
}