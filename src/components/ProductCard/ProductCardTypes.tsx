export interface IProductCard {
  name: string;
  price: number;
  image?: any;
  installationPrice: number;
  id: number;
  category?: ProductCardCategory;
  description?: string;
  installation?: boolean;
  license?: string;
  productAvailability?: boolean;
  productStatus?: ProductStatus;
  productionTime?: Date;
  quantity?: number;
  seller?: ProductCardSeller;
  vendor?: ProductCardVendor;
  version?: string;
  isLiked?: boolean;
  cartQuantity?: number;
  date?:string;
}

export interface IProductCardProps {
  card: IProductCard;
  key?: string | number;

}

type ProductCardCategory = {
  id: number;
  name: string;
};

type ProductCardImage = {
  contentType?: string;
  id?: number;
  name?: string;
  size?: number;
  url: string;
};

type ProductCardSeller = {
  description: string;
  email: string;
  id: number;
  imageResponseDto: ProductCardImage;
  name: string;
  phone: string;
  registrationTime: Date;
  requisites: {
    account: string;
    id: number;
  };
};

export type ProductCardVendor = {
  country: string;
  description: string;
  id: number;
  image: ProductCardImage;
  name: string;
};

export enum ProductStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  REJECTED = 'REJECTED',
  SHIPPED = 'SHIPPED',
}
