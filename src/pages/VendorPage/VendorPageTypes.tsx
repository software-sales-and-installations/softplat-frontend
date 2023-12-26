interface IVendor {
  name: string;
  description: string;
  id: number;
  country: string;
  image?: VendorImage;
}

type VendorImage = {
  name?: string;
  id?: number;
  url: string;
  size?: number;
  contentType?: string;
};
interface VendorsList {
  vendors: IVendor[]
}
