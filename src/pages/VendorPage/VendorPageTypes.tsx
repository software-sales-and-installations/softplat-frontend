interface IVendor {
  name: string;
  description: string;
  id: number;
  country: string;
  image?: VendorImage;
}

interface VendorsList {
  vendors: IVendor[]
}

type VendorImage = {
  name?: string;
  id?: number;
  url: string;
  size?: number;
  contentType?: string;
};
