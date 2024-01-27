import { FC } from 'react';
import styles from './CardsGrid.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import { CardsGridProps } from './CardsGridTypes';

const CardsGrid: FC<CardsGridProps> = ({cards}) => {
  return (
    <ul className={styles.list}>
      {cards?.products?.map(i => (
        <li key={'list' + i.id} className={styles.item}>
          <ProductCard key={`card${i.id}`} card={i}  />
        </li>
      ))}
    </ul>
  );
};

export default CardsGrid;
