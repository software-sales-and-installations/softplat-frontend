import React, { useEffect } from 'react';
import styles from './SellerCorrection.module.scss';
import EmptyState from '../EmptyState/EmptyState';
import SellerCard from '../SellerCard/SellerCard';
import SellerTable from '../SellerTable/SellerTable';
import { useSellerProductListQuery } from '../../utils/api/sellerApi';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../services/redux/store';
import { sellerRejectedList } from '../../pages/Seller/SellerSlice';

const SellerCorrection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: rejectedList } =
  useSellerProductListQuery(
    {
      status: 'REJECTED',
    },
    { refetchOnMountOrArgChange: true },
  );
  // const rejectedList = JSON.parse(
  //   localStorage.getItem('sellerRejectedList')!,
  // ).products;
useEffect(()=>{
  dispatch(sellerRejectedList(rejectedList?.totalProducts))
}, [rejectedList])
  return (
    <section className={styles.correction}>
      {rejectedList?.products.length === 0 ? (
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
          {rejectedList?.products.map(
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
