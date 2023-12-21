import React from 'react';
import styles from './CardPurchases.module.scss';
// import { addToPurchases } from '../../services/redux/slices/purchases/purchases.ts';
// import { useAppDispatch } from '../../services/redux/store.ts';

export type cardPurchasesProps = {
  id: number;
  image: string;
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
  // id,
  image,
  name,
  vendor,
  seller,
  data,
}) => {

  // const dispatch = useAppDispatch();
  // dispatch(addToPurchases(id));

  const date = new Date();

  const currentDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  const expiredDate = data
    .split(' ')[0]
    .split('-')
    .map((item, i) => {
      if (i === 0) {
        return (Number(item) + 1).toString();
      }
      return item;
    })
    .join('-');

  return (
    <div className={styles.cardPurchases}>
      <div className={styles.cardPurchases__imgContainer}>
        <img
          src={image}
          alt="Изображение продукта"
          className={styles.cardPurchases__img}
        />
      </div>
      <div className={styles.cardPurchases__description}>
        <h2 className={styles.cardPurchases__name}>{name}</h2>
        <p className={styles.cardPurchases__brand}>{vendor.name}</p>
        <p className={styles.cardPurchases__seller}>{seller.name}</p>
      </div>
      <div
        className={styles.cardPurchases__loadContainer}
        title={currentDate === expiredDate ? 'Срок лицензии истёк' : ''}
      >
        <svg
          className={`${styles.cardPurchases__load} ${
            currentDate === expiredDate
              ? styles.cardPurchases__load_inactive
              : ''
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
      </div>
      <span className={styles.cardPurchases__data}>
        {data.split(' ')[0].split('-').join('.')}
      </span>
    </div>
  );
};

export default CardPurchases;
