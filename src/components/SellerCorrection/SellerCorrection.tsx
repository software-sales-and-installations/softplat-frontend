import React from 'react';
import styles from './SellerCorrection.module.scss';
import EmptyState from '../EmptyState/EmptyState';
import SellerCard from '../SellerCard/SellerCard';
import SellerTable from '../SellerTable/SellerTable';
import { Link } from 'react-router-dom';

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
                <SellerCard key={product.id} {...product} trash={true} />
                </Link>
              ),
            )}
          </ul>
        </>
      )}
    </section>
  );
};

export default SellerCorrection;
