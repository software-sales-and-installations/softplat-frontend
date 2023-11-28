import { useState } from 'react';
import classNames from 'classnames';
import styles from './SellerCabinetContent.module.scss';
import { SellerExistingCardTable } from '../SellerExistingCardTable/SellerExistingCardTable';

const SellerProduct: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState('existingCards');

  return (
    <section className={styles.sellerProduct}>
      <h2 className={styles.sellerProduct__title}>Мои товары</h2>
      <p className={styles.sellerProduct__subtitle}>Здесь вы можете посмотреть список ваших товаров, добавить новый товар и отредактировать карточку существующего товара</p>
      <nav className={styles.sellerProduct__titles}>
        <button
          type="button"
          onClick={() => setActiveBtn('existingCards')}
          className={classNames(
            styles.sellerProduct__data,
            activeBtn === 'existingCards' ? styles.sellerProduct__data_aktive : '',
          )}
        >
          Созданные карточки
        </button>
        <button
          onClick={() => setActiveBtn('addCard')}
          type="button"
          className={classNames(
            styles.sellerProduct__data,
            activeBtn === 'addCard' ? styles.sellerProduct__data_aktive : '',
          )}
        >
          Добавить карточку
        </button>
        <button
          onClick={() => setActiveBtn('moderationCard')}
          type="button"
          className={classNames(
            styles.sellerProduct__data,
            activeBtn === 'moderationCard' ? styles.sellerProduct__data_aktive : '',
          )}
        >
          На модерации
        </button>
      </nav>
      {activeBtn==='existingCards'? <SellerExistingCardTable/> : null}
    </section>
  );
};

export default SellerProduct;
