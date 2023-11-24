import { IProductCard } from "../ProductCard/ProductCardTypes";
interface ICards{
  products: IProductCard[]
}
export interface CardsGridProps {
    cards: ICards;
  };

// export interface ProductCard {
//     id?: number;
//     title: string;
//     price?: number;
//     url: string;
// }
