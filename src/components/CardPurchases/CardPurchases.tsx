import * as React from 'react';
import styles from './CardPurchases.module.scss';

type ProductCardProps = {
  img: string;
  name: string;
  brand: string;
  seller: string;
  data: string;
  isDownloaded: boolean;
};

const CardPurchases: React.FC<ProductCardProps> = ({
  img,
  name,
  brand,
  seller,
  data,
  isDownloaded,
}) => {
  return (
    <li className={styles.cardPurchases}>
      <div className={styles.cardPurchases__imgContainer}>
        <img
          src={img}
          alt="Изображение продукта"
          className={styles.cardPurchases__img}
        />
      </div>
      <div className={styles.cardPurchases__description}>
        <h2 className={styles.cardPurchases__name}>{name}</h2>
        <p className={styles.cardPurchases__brand}>{brand}</p>
        <p className={styles.cardPurchases__seller}>{seller}</p>
      </div>
      <svg
        className={`${styles.cardPurchases__load} ${
          isDownloaded ? styles.cardPurchases__load_inactive : ''
        }`}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M1 22L1 23.75C1 26.6495 3.35051 29 6.25 29L23.75 29C26.6495 29 29 26.6495 29 23.75L29 22M22 15L15 22M15 22L8 15M15 22L15 0.999999"
          stroke="#55505C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={styles.cardPurchases__data}>{data}</span>
    </li>
  );
};

export default CardPurchases;
