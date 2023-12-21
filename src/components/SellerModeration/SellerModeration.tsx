import React from 'react';
import styles from './SellerModeration.module.scss';
import EmptyState from '../EmptyState/EmptyState';
import SellerTable from '../SellerTable/SellerTable';
import SellerCard from '../SellerCard/SellerCard';

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
                image: string;
                name: string;
                vendor: {
                  name: string;
                };
                productionTime: string;
              }) => (
                <SellerCard key={product.id} {...product} trash={false} />
              ),
            )}
          </ul>
        </>
      )}
    </section>
  );
};

export default SellerModeration;
