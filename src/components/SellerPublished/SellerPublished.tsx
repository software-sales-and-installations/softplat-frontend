import React from 'react';
import styles from './SellerPublished.module.scss';
import SellerCard from '../SellerCard/SellerCard';
import EmptyState from '../EmptyState/EmptyState';
import SellerTable from '../SellerTable/SellerTable';
import { Link } from 'react-router-dom';
import { useSellerProductListQuery } from '../../utils/api/sellerApi';

const SellerPublished: React.FC = () => {
  const { data: publishedList } =
  useSellerProductListQuery(
    {
      status: 'PUBLISHED',
    },
    { refetchOnMountOrArgChange: true },
  );
  // const publishedList = localStorage.getItem('sellerPublishedList')
  //   ? JSON.parse(localStorage.getItem('sellerPublishedList')!).products
  //   : [];

  return (
    <section className={styles.published}>
      {publishedList?.products.length === 0 ? (
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
            {publishedList?.products.map(
              (product: {
                id: number;
                image: string;
                name: string;
                vendor: {
                  name: string;
                };
                productionTime: string;
              }) => (
                <Link key={product.id} className={styles.link} to ={`/product/${product.id}`}>
                <SellerCard  {...product} trash={true} />
                </Link>
              ),
            )}
          </ul>
        </>
      )}
    </section>
  );
};

export default SellerPublished;
