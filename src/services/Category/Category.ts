import { IProduct } from "../Product/Product"

export interface ICategory {
    id: number
    name: string
}

export interface ICategoryWithProducts extends ICategory {
    products: IProduct[]
}
