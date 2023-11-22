export type ProductCardProps = {
  name: string;
  price: number;
  id?: number;
  installationPrice: number;
  category?: ProductCardCategory;
  description?: string;
  image: ProductCardImage;
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
  // img: string;
  // isLiked: boolean;
};

type ProductCardCategory = {
  id: number;
  name: string;
}

type ProductCardImage = {
  contentType: string;
  id: number;
  name: string;
  size: number;
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
