import React from 'react';
import styles from './SellerPublished.module.scss';
import { PURCHASES_ITEMS_CABINET } from '../../utils/constants';
import CardPublished from '../CardPublished/CardPublished';
import EmptyState from '../EmptyState/EmptyState';

const SellerPublished: React.FC = () => {
  return (
    <section className={styles.published}>
      {/* <EmptyState navigateTo="/seller/add-card" buttonText="Добавить карточку">
        Вы еще ничего не опубликовали
      </EmptyState> */}
      <ul className={styles.published__header}>
        <li className={styles.published__item}>Лого</li>
        <li className={styles.published__item}>Наименование</li>
        <li className={styles.published__item}>Вендор</li>
        <li className={styles.published__item}>Артикул</li>
        <li className={styles.published__item}>Дата</li>
      </ul>
      <ul className={styles.published__list}>
        {PURCHASES_ITEMS_CABINET.map(item => (
          <CardPublished key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default SellerPublished;
