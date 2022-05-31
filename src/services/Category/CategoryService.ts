import { api } from '../api'
import { ICategoryWithProducts } from './Category'

export class CategoryService {
  static async getAllCategoriesWithProducts (): Promise<ICategoryWithProducts[]> {
    const { data } = await api.get<ICategoryWithProducts[]>('/ProductCategory/WithProducts')

    return data
  }
}
