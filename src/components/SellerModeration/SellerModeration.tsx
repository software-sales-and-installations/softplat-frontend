import React from 'react';
import styles from './SellerModeration.module.scss';
import EmptyState from '../EmptyState/EmptyState';
import SellerTable from '../SellerTable/SellerTable';
import SellerCard from '../SellerCard/SellerCard';
import { useSellerProductListQuery } from '../../utils/api/sellerApi';
import { Link } from 'react-router-dom';

const SellerModeration: React.FC = () => {
  const { data: shippedList } =
  useSellerProductListQuery(
    {
      status: 'SHIPPED',
    },
    { refetchOnMountOrArgChange: true },
  );
  // const shippedList = JSON.parse(
  //   localStorage.getItem('sellerShippedList')!,
  // ).products;

  return (
    <section className={styles.moderation}>
      {shippedList?.products.length === 0 ? (
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
            {shippedList?.products.map(
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
                  <SellerCard key={product.id} {...product} trash={false} />
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
