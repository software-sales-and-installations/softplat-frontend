import React from 'react';
import styles from './SellerCorrection.module.scss';
import EmptyState from '../EmptyState/EmptyState';
import SellerCard from '../SellerCard/SellerCard';
import SellerTable from '../SellerTable/SellerTable';

const SellerCorrection: React.FC = () => {
  const rejectedList = JSON.parse(
    localStorage.getItem('sellerRejectedList')!,
  ).products;
  console.log(rejectedList);

  return (
    <section className={styles.correction}>
      {rejectedList.length === 0 ? (
        <EmptyState
          navigateTo="/seller/add-card"
          buttonText="Добавить карточку"
        >
          Карточек для доработки пока нет
        </EmptyState>
      ) : (
        <>
          <SellerTable />
          <ul className={styles.correction__list}>
            {rejectedList.map(
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

export default SellerCorrection;
