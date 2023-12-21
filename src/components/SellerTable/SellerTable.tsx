import React from 'react';
import styles from './SellerTable.module.scss';

const SellerTable: React.FC = () => {
  return (
    <ul className={styles.tableHeader}>
      <li className={styles.tableHeader__item}>Лого</li>
      <li className={styles.tableHeader__item}>Наименование</li>
      <li className={styles.tableHeader__item}>Вендор</li>
      <li className={styles.tableHeader__item}>Артикул</li>
      <li className={styles.tableHeader__item}>Дата</li>
    </ul>
  );
};

export default SellerTable;
