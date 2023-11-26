import styles from './SellerProduct.module.scss';
import CardCreated from '../CardCreated/CardCreated';
import SellerAddCard from '../SellerAddCard/SellerAddCard';
import { useState } from 'react';
import classNames from 'classnames';

const SellerProduct: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState('cards');

  return (
    <section className={styles.sellerProduct}>
      <h2 className={styles.sellerProduct__title}>Мои товары</h2>
      <p className={styles.sellerProduct__subtitle}>
        Здесь вы можете посмотреть список ваших товаров, добавить новый товар и
        отредактировать карточку существующего товара
      </p>
      <nav className={styles.sellerProduct__titles}>
        <button
          type="button"
          onClick={() => setActiveBtn('cards')}
          className={classNames(
            styles.sellerProduct__data,
            activeBtn === 'cards' ? styles.sellerProduct__data_aktive : '',
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
          onClick={() => setActiveBtn('moderation')}
          type="button"
          className={classNames(
            styles.sellerProduct__data,
            activeBtn === 'moderation' ? styles.sellerProduct__data_aktive : '',
          )}
        >
          На модерации
        </button>
        <button
          onClick={() => setActiveBtn('exceptCards')}
          type="button"
          className={classNames(
            styles.sellerProduct__data,
            activeBtn === 'exceptCards'
              ? styles.sellerProduct__data_aktive
              : '',
          )}
        >
          Ожидают доработки
        </button>
      </nav>
      {activeBtn === 'cards' ? <CardCreated /> : <SellerAddCard />}
    </section>
  );
};

export default SellerProduct;
