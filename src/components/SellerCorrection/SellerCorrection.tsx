import React from 'react';
import styles from './SellerCorrection.module.scss';
import EmptyState from '../EmptyState/EmptyState';

const SellerCorrection: React.FC = () => {
  return (
    <section className={styles.correction}>
      <EmptyState navigateTo="/seller/add-card" buttonText="Добавить карточку">
        Карточек для доработки пока нет
      </EmptyState>
    </section>
  );
};

export default SellerCorrection;
