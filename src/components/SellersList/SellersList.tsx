import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './SellersList.module.scss';

type SellersListProps = {
  id: number;
  data: string;
  name: string;
  vendor: number;
  seller: string;
  amount: number;
  price: number;
  profit: number;
};

const SellersList: React.FC<SellersListProps> = ({
  id,
  data,
  name,
  vendor,
  seller,
  amount,
  price,
  profit,
}) => {
  return (
    <div className={styles.sellersList}>
      <p className={styles.sellersList__title_p}>{id}</p>
      <p className={styles.sellersList__title_p}>{data}</p>
      <Link to="/product" className={styles.sellersList__name}>
        {name}
      </Link>
      <p className={styles.sellersList__title_p}>{vendor}</p>
      <p className={styles.sellersList__title_p}>{seller}</p>
      <p className={styles.sellersList__title_p}>{amount}</p>
      <p className={styles.sellersList__title_p}>{price}</p>
      <p className={styles.sellersList__title_p}>{profit}</p>
    </div>
  );
};

export default SellersList;
