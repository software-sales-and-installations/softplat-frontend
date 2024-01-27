import React from 'react';
import styles from './CardPurchases.module.scss';
import { Link } from 'react-router-dom';
import CONST_IMG from '../../images/underfined-image.jpg'
import { API_BASE_URL } from '../../utils/constants.ts';

export type cardPurchasesProps = {
  id: number;
  image: {
    id: number;
  };
  name: string;
  vendor: {
    name: string;
  };
  seller: {
    name: string;
  };
  data: string;
};

const CardPurchases: React.FC<cardPurchasesProps> = ({
  id,
  image,
  name,
  vendor,
  seller,
  data,
}) => {

  const currentDate = new Date();
  const expiredDate = new Date(
    data
      .split(' ')[0]
      .split('-')
      .map((item, i) => {
        if (i === 0) {
          return (Number(item) + 1).toString();
        }
        return item;
      })
      .join('-'),
  );

  const isExpired = currentDate.getTime() > expiredDate.getTime();

  return (
    <Link to={`/product/${id}`} className={styles.link}>
    <li className={styles.cardPurchases}>
      <div className={styles.cardPurchases__imgContainer}>
        <img
          src={(image?.id ? `${API_BASE_URL}/image/${image?.id}` : CONST_IMG)}
          alt="Изображение продукта"
          className={styles.cardPurchases__img}
        />
      </div>
      <div className={styles.cardPurchases__description}>
        <h2 className={styles.cardPurchases__name}>{name}</h2>
        <p className={styles.cardPurchases__brand}>{vendor.name}</p>
        <p className={styles.cardPurchases__seller}>{seller.name}</p>
      </div>
      <button
        className={styles.cardPurchases__loadButton}
        disabled={isExpired}
        title={isExpired ? 'Срок лицензии истёк' : ''}
      >
        <svg
          className={`${styles.cardPurchases__load} ${
            isExpired ? styles.cardPurchases__load_inactive : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          stroke="#55505C"
        >
          <path
            d="M1 22L1 23.75C1 26.6495 3.35051 29 6.25 29L23.75 29C26.6495 29 29 26.6495 29 23.75L29 22M22 15L15 22M15 22L8 15M15 22L15 0.999999"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <span className={styles.cardPurchases__data}>
        {data.split(' ')[0].split('-').join('.')}
      </span>
    </li>
    </Link>
  );
};

export default CardPurchases;
