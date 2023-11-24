import styles from '../SellerProduct/SellerProduct.module.scss';
import SellerCreatedCards from '../SellerCreatedCards/SellerCreatedCards';
import { PRODUCT_CREATED_SELLER } from '../../utils/constants';

const CardCreated: React.FC = () => {
  return (
    <ul className={styles.sellerProduct__list}>
      {PRODUCT_CREATED_SELLER.map(i => (
        <li key={i.id} className={styles.sellerProduct__item}>
          <SellerCreatedCards
            img={i.img}
            name={i.name}
            vendor={i.vendor}
            category={i.category}
            code={i.code}
            describe={i.describe}
            data={i.data}
          />
        </li>
      ))}
    </ul>
  );
};

export default CardCreated;
