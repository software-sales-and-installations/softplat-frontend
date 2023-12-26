import React from 'react';
import styles from './SellerSales.module.scss';
import EmptyState from '../EmptyState/EmptyState';
import Calendar from '../Calendar/Calendar.tsx';

const SellerSales: React.FC = () => {
  return (
    <section className={styles.sales}>
      <EmptyState button={false}>Продаж пока нет</EmptyState>
      <Calendar />
    </section>
  );
};

export default SellerSales;
