import { FC } from 'react';
import styles from './CardsGrid.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import { CardsGridProps } from './CardsGridTypes';

const CardsGrid: FC<CardsGridProps> = ({cards}) => {
  return (
    <ul className={styles.list}>
      {cards.map(i => (
        <li className={styles.item} key={i.id}>
          <ProductCard
            name={i.name}
            price={i.price}
            installationPrice={i.installationPrice}
            image={i.image}
            isLiked={false}
            id={i.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default CardsGrid;
