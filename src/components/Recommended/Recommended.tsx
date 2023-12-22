import { FC } from 'react';
import CardsGrid from '../CardsGrid/CardsGrid';
import styles from './Recommended.module.scss';
import { IProductCard, ProductStatus } from '../ProductCard/ProductCardTypes';
import Preloader from '../Preloader/Preloader';
import { usePublicProductListQuery } from '../../utils/api/publicProductApi';

const Recommended: FC = () => {
  const { data, error, isLoading } = usePublicProductListQuery({
    minId: 0,
    pageSize: 30,
    sort: 'NEWEST',
  });
  
  const recommendedCards = data?.products.filter(
    (card: IProductCard) =>
      card.productStatus === ProductStatus.PUBLISHED && card.quantity > 0,
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
