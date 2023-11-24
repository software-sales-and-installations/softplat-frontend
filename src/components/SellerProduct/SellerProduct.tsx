import styles from './SellerProduct.module.scss';
import CardCreated from '../CardCreated/CardCreated';
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
      <div className={styles.sellerProduct__subheadings}>
        <p className={styles.sellerProduct__subheading}>Логотип</p>
        <p className={styles.sellerProduct__subheading}>Название</p>
        <p className={styles.sellerProduct__subheading}>Вендор</p>
        <p className={styles.sellerProduct__subheading}>Категория</p>
        <p className={styles.sellerProduct__subheading}>Артикул</p>
        <p className={styles.sellerProduct__subheading_description}>Описание</p>
        <p className={styles.sellerProduct__subheading}>Дата</p>
        <p className={styles.sellerProduct__subheading}>Ред</p>
      </div>
      <CardCreated />
    </section>
  );
};

export default SellerProduct;
