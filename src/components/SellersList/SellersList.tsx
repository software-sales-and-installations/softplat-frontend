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
      <p className={styles.sellersList__title}>{id}</p>
      <p className={styles.sellersList__title}>{data}</p>
      <Link to="/product" className={styles.sellersList__name}>
        {name}
      </Link>
      <p className={styles.sellersList__title}>{vendor}</p>
      <p className={styles.sellersList__title}>{seller}</p>
      <p className={styles.sellersList__title}>{amount}</p>
      <p className={styles.sellersList__title}>{price}</p>
      <p className={styles.sellersList__title}>{profit}</p>
    </div>
  );
};

export default SellersList;
