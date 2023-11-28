import { FC } from 'react';
import styles from './CardsGrid.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import { CardsGridProps } from './CardsGridTypes';

const CardsGrid: FC<CardsGridProps> = ({cards}) => {
  return (
    <ul className={styles.list}>
      {cards?.products?.map(i => (
        <li className={styles.item} key={i.id}>
          <ProductCard card={i}  />
        </li>
      ))}
    </ul>
  );
};

export default CardsGrid;
