export interface IProductCard {
  name: string;
  price: number;
  image?: ProductCardImage;
  installationPrice: number;
  id?: number;
  category?: ProductCardCategory;
  description?: string;
  installation?: boolean;
  license?: string;
  productAvailability?: boolean;
  productStatus?: string;
  productionTime?: Date;
  quantity?: number;
  seller?: ProductCardSeller;
  vendor?: ProductCardVendor;
  version?: string;
  isLiked?: boolean;
};

type ProductCardCategory = {
  id: number;
  name: string;
}

type ProductCardImage = {
  contentType?: string;
  id?: number;
  name?: string;
  size?: number;
  url: string;
}

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
}

type ProductCardVendor = {
  country: string;
  description: string;
  id: number;
  image: ProductCardImage;
  name: string;
}
