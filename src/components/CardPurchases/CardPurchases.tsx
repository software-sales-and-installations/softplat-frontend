import * as React from 'react';
import styles from './CardPurchases.module.scss';

type ProductCardProps = {
  img: string;
  name: string;
  brand: string;
  describe: string;
  data: string;
};

const CardPurchases: React.FC<ProductCardProps> = ({
  img,
  name,
  brand,
  describe,
  data,
}) => {
  return (
    <div className={styles.cardPurchases}>
      <div className={styles.cardPurchases__photoProduct}>
        <img
          className={styles.cardPurchases__img}
          src={img}
          alt="Изображение продукта"
        />
        <div className={styles.cardPurchases__nameProduct}>
          <h1 className={styles.cardPurchases__name}>{name}</h1>
          <p className={styles.cardPurchases__brand}>{brand}</p>
          <span className={styles.cardPurchases__describe}>{describe}</span>
        </div>
      </div>
      <div className={styles.cardPurchases__loadProduct}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          className={styles.cardPurchases__load}
        >
          <path
            d="M1 22L1 23.75C1 26.6495 3.35051 29 6.25 29L23.75 29C26.6495 29 29 26.6495 29 23.75L29 22M22 15L15 22M15 22L8 15M15 22L15 0.999999"
            stroke="#55505C"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span className={styles.cardPurchases__data}>{data}</span>
      </div>
    </div>
  );
};

export default CardPurchases;
