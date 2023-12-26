import React, { useEffect } from 'react';
import styles from './SellerModeration.module.scss';
import EmptyState from '../EmptyState/EmptyState';
import SellerTable from '../SellerTable/SellerTable';
import SellerCard from '../SellerCard/SellerCard';
import { useProductSellerListQuery } from '../../utils/api/userProductApi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../services/redux/store';
import { sellerShippedList } from '../../pages/Seller/SellerSlice';

const SellerModeration: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: shippedList, } =
    useProductSellerListQuery(
      {
        status: 'SHIPPED',
      },
      { refetchOnMountOrArgChange: true },
    );
const [shippedListData, setshippedListData] = useState(shippedList)
useEffect(()=>{
  setshippedListData(shippedList)
  dispatch(sellerShippedList(shippedList?.totalProducts))
  console.log(shippedList)
},[shippedList])

  return (
    <section className={styles.moderation}>
      {shippedListData?.totalProducts === 0 ? (
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
            {shippedListData?.products.map(
              (product: {
                id: number;
                image: any;
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
