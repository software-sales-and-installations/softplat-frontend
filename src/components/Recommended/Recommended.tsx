import { PRODUCT_ITEMS } from '../../utils/constants';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Recommended.module.scss';

// type Props = {};

const Recommended: React.FC = () => {
  return (
    <section className={styles.recommended}>
      <h2 className={styles.recommended__title}>Рекомендуем к покупке</h2>
      <ul className={styles.recommended__list}>
        {PRODUCT_ITEMS.map(i => (
          <li className={styles.recommended__item} key={i.name}>
            <ProductCard
              name={i.name}
              price={i.price}
              img={i.img}
              isLiked={false}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Recommended;
