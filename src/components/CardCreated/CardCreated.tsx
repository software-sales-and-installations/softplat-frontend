import styles from '../SellerProduct/SellerProduct.module.scss';
import SellerCreatedCards from '../SellerCreatedCards/SellerCreatedCards';
import { PRODUCT_CREATED_SELLER } from '../../utils/constants';

const CardCreated: React.FC = () => {
  return (
    <>
      <div className={styles.sellerProduct__subheadings}>
        <p className={styles.sellerProduct__subheading}>Логотип</p>
        <p className={styles.sellerProduct__subheading}>Название</p>
        <p className={styles.sellerProduct__subheading}>Вендор</p>
        <p className={styles.sellerProduct__subheading}>Категория</p>
        <p className={styles.sellerProduct__subheading}>Артикул</p>
        <p className={styles.sellerProduct__subheading_description}>Описание</p>
        <p className={styles.sellerProduct__subheading_data}>Дата</p>
        <p className={styles.sellerProduct__subheading_edit}>Ред</p>
      </div>
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
    </>
  );
};

export default CardCreated;
