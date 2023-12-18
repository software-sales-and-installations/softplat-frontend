import React from 'react';
import styles from './SellerModeration.module.scss';
import EmptyState from '../EmptyState/EmptyState';

const SellerModeration: React.FC = () => {
  return (
    <section className={styles.moderation}>
      <EmptyState navigateTo="/seller/add-card" buttonText="Добавить карточку">
        Вы еще ничего не отправили на модерацию
      </EmptyState>
    </section>
  );
};

export default SellerModeration;
