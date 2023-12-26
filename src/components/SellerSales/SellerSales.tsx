import React from 'react';
import styles from './SellerSales.module.scss';
import EmptyState from '../EmptyState/EmptyState';
import Calendar from '../Calendar/Calendar.tsx';
import { StatsTable } from '../StatsTable/StatsTable';

const SellerSales: React.FC = () => {
  return (
    <section className={styles.sales}>
      <EmptyState button={false}>Продаж пока нет</EmptyState>
      <StatsTable/>
      <Calendar />
    </section>
  );
};

export default SellerSales;
