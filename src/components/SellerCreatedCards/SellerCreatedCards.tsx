import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './SellerCreatedCards.module.scss';

type SellerCardProps = {
  img: string;
  name: string;
  vendor: string;
  category: string;
  code: string;
  describe: string;
  data: string;
};

const SellerCreatedCards: React.FC<SellerCardProps> = ({
  img,
  name,
  vendor,
  category,
  code,
  describe,
  data,
}) => {
  return (
    <div className={styles.sellerCreatedCards}>
      <img
        className={styles.sellerCreatedCards__img}
        src={img}
        alt="Изображение продукта"
      />
      <Link to="/product" className={styles.sellerCreatedCards__name}>
        {name}
      </Link>
      <p className={styles.sellerCreatedCards__title}>{vendor}</p>
      <p className={styles.sellerCreatedCards__title}>{category}</p>
      <p className={styles.sellerCreatedCards__title}>{code}</p>
      <p className={styles.sellerCreatedCards__title}>{describe}</p>
      <p className={styles.sellerCreatedCards__title}>{data}</p>
      <div className={styles.sellerCreatedCards__title}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M13.2322 3.73223L16.7677 7.26777M14.7322 2.23223C15.7085 1.25592 17.2914 1.25592 18.2677 2.23223C19.244 3.20854 19.244 4.79146 18.2677 5.76777L4.5 19.5355H1V15.9644L14.7322 2.23223Z"
            stroke="#545F71"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default SellerCreatedCards;
