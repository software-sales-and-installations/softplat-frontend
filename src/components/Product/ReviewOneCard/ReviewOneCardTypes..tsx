import { ProductCardCategory, ProductCardImage, ProductCardVendor } from '../../ProductCard/ProductCardTypes.tsx';

export interface IReview {
    author: IAuthor,
    date: Date,
    id: number,
    product: IProduct,
    rating: string | number | null,
    text: string,
  }

export interface IAuthor {
  email: string,
  id: number,
  name: string,
  phone: string,
  registrationTime: Date,
}

export interface IProduct {
    category: ProductCardCategory,
    description: string,
    hasDemo: boolean,
    id: number,
    image: ProductCardImage,
    installation: true,
    installationPrice: number,
    name: string,
    price: number,
    productAvailability: true,
    productStatus: string,
    productionTime: Date,
    quantity: number,
    rating: string | number | null,
    seller: {
      email: string,
      id: number,
      imageResponseDto: ProductCardImage,
      name: string,
      phone: string,
      registrationTime: Date,
      requisites: Requisites,
    },
    vendor: ProductCardVendor,
    version: string,
  }
  export type Requisites = {
    account: string,
    address: string,
    bik: string,
    id: number,
    inn: string,
    kpp: string,
    legalForm: string,
    ogrn: string,
    ogrnip: string,
  }
