import { FC } from 'react';
import styles from './CardsGrid.module.scss';
import ProductCard from '../ProductCard/ProductCard';

const CardsGrid: FC<CardsGridProps> = ({cards}) => {
  return (
    <ul className={styles.list}>
      {cards.map(i => (
        <li className={styles.item} key={i.id}>
          <ProductCard
            name={i.name}
            price={i.price}
            img={i.img}
            isLiked={false}
          />
        </li>
      ))}
    </ul>
  );
};

export default CardsGrid;
