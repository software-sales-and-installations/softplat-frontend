import React from 'react';
import styles from './SellerSales.module.scss';
import EmptyState from '../EmptyState/EmptyState';

const SellerSales: React.FC = () => {
  return (
    <section className={styles.sales}>
      <EmptyState button={false}>Продаж пока нет</EmptyState>
    </section>
  );
};

export default SellerSales;
