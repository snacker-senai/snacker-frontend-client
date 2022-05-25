import { ICategoryWithProducts } from "./Category";

export class CategoryService {
    static async getAllCategoriesWithProducts (): Promise<ICategoryWithProducts[]> {
        return [
            {
              id: 1,
              name: "Massas",
              products: [
                {
                  id: 1,
                  name: 'Lasagna',
                  description: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
                  price: 19.90,
                  image: "https://img.youtube.com/vi/FrdumyhYaZY/maxresdefault.jpg",
                  productCategory: {
                    id: 1,
                    name: "Massas"
                  }
                },
                {
                  id: 2,
                  name: 'Macarrão',
                  description: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
                  price: 24.90,
                  image: "https://img.youtube.com/vi/FrdumyhYaZY/maxresdefault.jpg",
                  productCategory: {
                    id: 1,
                    name: "Massas"
                  }
                }
              ]
            },
            {
              id: 2,
              name: "Saladas",
              products: [
                {
                  id: 1,
                  name: 'Alface',
                  description: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
                  price: 9.90,
                  image: "https://3.bp.blogspot.com/-ctmQrsFnXjg/WXqdIOVOtKI/AAAAAAAACq4/aWDg99uBTto4-eIMhewtVbh9bym9gkGWQCLcBGAs/s1600/alface-beneficios-e-propriedades.jpg",
                  productCategory: {
                    id: 1,
                    name: "Massas"
                  }
                },
              ]
            },
            {
              id: 2,
              name: "Risotos",
              products: [
                {
                  id: 1,
                  name: 'Alface',
                  description: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
                  price: 9.90,
                  image: "https://3.bp.blogspot.com/-ctmQrsFnXjg/WXqdIOVOtKI/AAAAAAAACq4/aWDg99uBTto4-eIMhewtVbh9bym9gkGWQCLcBGAs/s1600/alface-beneficios-e-propriedades.jpg",
                  productCategory: {
                    id: 1,
                    name: "Massas"
                  }
                },
              ]
            },
            {
              id: 2,
              name: "Sopas",
              products: [
                {
                  id: 1,
                  name: 'Alface',
                  description: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
                  price: 9.90,
                  image: "https://3.bp.blogspot.com/-ctmQrsFnXjg/WXqdIOVOtKI/AAAAAAAACq4/aWDg99uBTto4-eIMhewtVbh9bym9gkGWQCLcBGAs/s1600/alface-beneficios-e-propriedades.jpg",
                  productCategory: {
                    id: 1,
                    name: "Massas"
                  }
                },
              ]
            }
        ]
    }
}
