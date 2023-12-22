import React from 'react';
import styles from './PersonalPurchases.module.scss';
import CardPurchases from '../CardPurchases/CardPurchases';
import { useOrderAllQuery } from '../../utils/api/buyerOrderApi';
import { cardPurchasesProps } from '../CardPurchases/CardPurchases';
import EmptyState from '../EmptyState/EmptyState';

type Product = Omit<cardPurchasesProps, 'data'>;

const PersonalPurchases: React.FC = () => {
<<<<<<< HEAD
  const { data: purchaseItems} = useOrderAllQuery(
=======
  const { data: purchaseItems, isSuccess } = useOrderAllQuery(
>>>>>>> dev
    localStorage.getItem('userId'),
    { refetchOnMountOrArgChange: true },
  );

  return (
    <section className={styles.personalPurchases}>
      {isSuccess && purchaseItems.orders.length === 0 && (
        <EmptyState navigateTo="/catalog" buttonText="Каталог">
          Покупок пока нет
        </EmptyState>
      )}
      <ul className={styles.personalPurchases__list}>
        {purchaseItems &&
          purchaseItems.orders.toReversed().map(
            (item: {
              id: number;
              productsOrdered: {
                id: number;
                productResponseDto: Product;
              }[];
              productionTime: string;
<<<<<<< HEAD
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
=======
            }) =>
              item.productsOrdered.map(
                (product: { id: number; productResponseDto: Product }) => (
                  <CardPurchases
                    key={product.id}
                    data={item.productionTime}
                    {...product.productResponseDto}
                  />
                ),
              ),
>>>>>>> dev
          )}
      </ul>
    </section>
  );
};

export default PersonalPurchases;
