export interface ISellerCardProps {
  mode?: 'inOrder';
  image: any;
  name: string;
  vendor: {
    name: string;
  };
  productionTime: string;
  trash: boolean;
  count?: number;
  id: number;
}
