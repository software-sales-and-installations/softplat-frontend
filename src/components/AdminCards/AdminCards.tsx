import styles from './AdminCards.module.scss';
import { FC } from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import { CardTable } from '../CardTable/CardTable';
import { usePublicProductListQuery } from '../../utils/api/publicProductApi';
import Preloader from '../Preloader/Preloader';

export const AdminCards: FC = () => {
  const [activeBtn, setActiveBtn] = useState('productCards');

  const { data, error, isLoading } = usePublicProductListQuery({
    minId: 0,
    pageSize: '',
    sort: 'NEWEST',
  });

  return (
    <section className={styles.adminProduct}>
      <h2 className={styles.adminProduct__title}>Карточки товаров</h2>
      <p className={styles.adminProduct__subtitle}>
        Здесь вы можете отредактировать карточки каталога
      </p>
      <nav className={styles.adminProduct__titles}>
        <button
          type="button"
          onClick={() => setActiveBtn('productCards')}
          className={classNames(
            styles.adminProduct__data,
            activeBtn === 'productCards'
              ? styles.adminProduct__data_active
              : '',
          )}
        >
          Созданные карточки
        </button>
        <button
          type="button"
          onClick={() => setActiveBtn('moderation')}
          className={classNames(
            styles.adminProduct__data,
            activeBtn === 'moderation' ? styles.adminProduct__data_active : '',
          )}
        >
          На модерации
        </button>
        <button
          type="button"
          onClick={() => setActiveBtn('status')}
          className={classNames(
            styles.adminProduct__data,
            activeBtn === 'status' ? styles.adminProduct__data_active : '',
          )}
        >
          Статус
        </button>
      </nav>
      {activeBtn === 'productCards' ? (
        isLoading ? (
          <Preloader />
        ) : error ? (
          <p>Произошла ошибка</p>
        ) : (
          <CardTable products={data.products} />
        )
      ) : null}
    </section>
  );
};
