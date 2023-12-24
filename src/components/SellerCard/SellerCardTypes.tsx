export interface ISellerCardProps {
  mode?: 'inOrder';
  image: string;
  name: string;
  vendor: {
    name: string;
  };
  productionTime: string;
  trash: boolean;
  count?: number;
}
