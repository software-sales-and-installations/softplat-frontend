import React, { useEffect } from 'react';
import styles from './SellerModeration.module.scss';
import EmptyState from '../EmptyState/EmptyState';
import SellerTable from '../SellerTable/SellerTable';
import SellerCard from '../SellerCard/SellerCard';
import { useProductSellerListQuery } from '../../utils/api/userProductApi';
import { useState } from 'react';

const SellerModeration: React.FC = () => {
  const { data: publishedList, } =
  useProductSellerListQuery(
      {
        status: 'SHIPPED',
      },
      { refetchOnMountOrArgChange: true },
    );
const [publishListData, setPublishListData] = useState(publishedList)
useEffect(()=>{
  setPublishListData(publishedList)
},[publishedList])

  return (
    <section className={styles.moderation}>
      {publishListData?.products.length === 0 ? (
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
            {publishListData?.products.map(
              (product: {
                id: number;
                image: any;
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
