import { FC } from 'react';
import CardsGrid from '../CardsGrid/CardsGrid';
import styles from './Recommended.module.scss';
import { ProductStatus } from '../ProductCard/ProductCardTypes';
import Preloader from '../Preloader/Preloader';
import { usePublicProductListQuery } from '../../utils/api/publicProductApi';

// type Props = {};

const Recommended: FC = () => {
  const { data, error, isLoading } = usePublicProductListQuery({
    minId: 0,
    pageSize: 10,
    sort: 'NEWEST',
  });

  const recommendedCards = data?.products.filter(
    (card: { productStatus: ProductStatus }) =>
      card.productStatus === ProductStatus.PUBLISHED,
  );

  return (
    <section className={styles.recommended}>
      <h2 className={styles.recommended__title}>Рекомендуем к покупке</h2>
      <ul className={styles.recommended__list}>
        {isLoading ? (
          <Preloader />
        ) : error ? (
          <p>Произошла ошибка</p>
        ) : (
          <CardsGrid cards={{ products: recommendedCards }} />
        )}
      </ul>
    </section>
  );
};

export default Recommended;
