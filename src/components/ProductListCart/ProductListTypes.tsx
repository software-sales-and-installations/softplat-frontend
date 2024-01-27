import { IProductCard } from "../ProductCard/ProductCardTypes";

export interface ICartItem {
    id: number;
    installation: boolean;
    productResponseDto: IProductCard;
    quantity: number;
    isChecked?: boolean;
}
