import ProductCard from '../../ProductCard/ProductCard.tsx';
import styles from './Similar.module.scss';
import { useSimilarProductsQuery } from '../../../utils/api/publicProductApi.tsx';
import Preloader from '../../Preloader/Preloader.tsx';
import { IProductCard } from '../../ProductCard/ProductCardTypes.tsx';

interface ISimilarProps {
  id: string;
}

function Similar({id = '0'}: ISimilarProps) {

  const {data: similarProds , isLoading, error} = useSimilarProductsQuery({productId: id, minId: '0', pageSize: '5'});

  return (
    <section>
    {(similarProds && (similarProds?.products?.filter(prod => prod.quantity !== 0).length > 0)) ? (
      <div className={styles.similar}>
      <h3 className={styles.similar__header}>Похожие</h3>
      <div className={styles.similar__cardWrapper}>
    {isLoading ? (
        <Preloader />
      ) : error ? (
        <p>Произошла ошибка</p>
      ) : (
      similarProds?.products?.filter(prod => prod.quantity !== 0).map((prod: IProductCard) => (
      <ProductCard key={prod.id} card={prod}></ProductCard>))
      )}
      </div>
    </div>) : null }
      </section>
  );
}

export default Similar;
