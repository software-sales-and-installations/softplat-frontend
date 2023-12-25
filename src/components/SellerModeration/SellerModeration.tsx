import React from 'react';
import styles from './SellerModeration.module.scss';
import EmptyState from '../EmptyState/EmptyState';
import SellerTable from '../SellerTable/SellerTable';
import SellerCard from '../SellerCard/SellerCard';
import { Link } from 'react-router-dom';

const SellerModeration: React.FC = () => {
  const shippedList = JSON.parse(
    localStorage.getItem('sellerShippedList')!,
  ).products;

  return (
    <section className={styles.moderation}>
      {shippedList.length === 0 ? (
        <EmptyState
          navigateTo="/seller/add-card"
          buttonText="Добавить карточку"
        >
          Вы еще ничего не отправили на модерацию
        </EmptyState>
      ) : (
        <>
          <SellerTable />
          <ul className={styles.moderation__list}>
            {shippedList.map(
              (product: {
                id: number;
                image: {
                  id: number;
                };
                name: string;
                vendor: {
                  name: string;
                };
                productionTime: string;
              }) => (
                <Link key={product.id} className={styles.link} to ={`/product/${product.id}`}>
                <SellerCard {...product} trash={false} />
                </Link>
              ),
            )}
          </ul>
        </>
      )}
    </section>
  );
};

export default SellerModeration;
