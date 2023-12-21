import React from 'react';
import styles from './SellerPublished.module.scss';
import SellerCard from '../SellerCard/SellerCard';
import EmptyState from '../EmptyState/EmptyState';
import SellerTable from '../SellerTable/SellerTable';

const SellerPublished: React.FC = () => {
  const publishedList = JSON.parse(
    localStorage.getItem('sellerPublishedList')!,
  ).products;

  return (
    <section className={styles.published}>
      {publishedList.length === 0 ? (
        <EmptyState
          navigateTo="/seller/add-card"
          buttonText="Добавить карточку"
        >
          Вы еще ничего не опубликовали
        </EmptyState>
      ) : (
        <>
          <SellerTable />
          <ul className={styles.published__list}>
            {publishedList.map(
              (product: {
                id: number;
                image: string;
                name: string;
                vendor: {
                  name: string;
                };
                productionTime: string;
              }) => (
                <SellerCard key={product.id} {...product} trash={true} />
              ),
            )}
          </ul>
        </>
      )}
    </section>
  );
};

export default SellerPublished;
