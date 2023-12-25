export interface ISellerCardProps {
  mode?: 'inOrder';
  image: {
    id: number;
  };
  name: string;
  vendor: {
    name: string;
  };
  productionTime: string;
  trash: boolean;
  count?: number;
  id: number;
}
