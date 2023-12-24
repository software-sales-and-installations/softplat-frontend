import React from 'react';
import styles from './SellerTable.module.scss';
import { ISellerTableProps } from './SellerTableTypes';

const SellerTable: React.FC<ISellerTableProps> = ({ mode }) => {
  return (
    <ul className={styles.tableHeader}>
      <li
        className={`${styles.tableHeader__item} ${
          mode === 'inOrder' ? styles.tableHeader__item_mode_inOrder : ''
        }`}
      >
        {mode === 'inOrder' ? '№' : 'Лого'}
      </li>
      <li className={styles.tableHeader__item}>Наименование</li>
      <li className={styles.tableHeader__item}>Вендор</li>
      <li className={styles.tableHeader__item}>Артикул</li>
      <li className={styles.tableHeader__item}>Дата</li>
    </ul>
  );
};

export default SellerTable;
