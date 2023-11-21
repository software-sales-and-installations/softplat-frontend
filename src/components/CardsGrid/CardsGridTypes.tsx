interface CardsGridProps {
    cards: ProductCard[]
  };

interface ProductCard {
    id?: number;
    name: string;
    price: number;
    img: string;
}
