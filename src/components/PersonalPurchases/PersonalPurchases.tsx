import React from 'react';
import styles from './PersonalPurchases.module.scss';
import CardPurchases from '../CardPurchases/CardPurchases';
import { useOrderAllQuery } from '../../utils/api/buyerOrderApi';
import { cardPurchasesProps } from '../CardPurchases/CardPurchases';

type Product = Omit<cardPurchasesProps, 'data'>;

const PersonalPurchases: React.FC = () => {
  const { data: purchaseItems} = useOrderAllQuery(
    localStorage.getItem('userId'),
    { refetchOnMountOrArgChange: true },
  );

  return (
    <section className={styles.personalPurchases}>
      <ul className={styles.personalPurchases__list}>
        {purchaseItems &&
          purchaseItems.orders.map(
            (item: {
              id: number;
              productsOrdered: {
                id: number;
                productResponseDto: Product;
              }[];
              productionTime: string;
            }) => (
              <li key={item.id}>
                {item.productsOrdered.map(
                  (product: { id: number; productResponseDto: Product }) => (
                    <CardPurchases
                      key={'purchase' + product.id}
                      data={item.productionTime}
                      {...product.productResponseDto}
                    />
                  ),
                )}
              </li>
            ),
          )}
      </ul>
    </section>
  );
};

export default PersonalPurchases;
