import { FC } from 'react';
import styles from './SellerDrafts.module.scss';
import EmptyState from '../EmptyState/EmptyState';
import SellerCard from '../SellerCard/SellerCard';
import SellerTable from '../SellerTable/SellerTable';

export const SellerDrafts: FC = () => {
  const draftList = JSON.parse(
    localStorage.getItem('sellerDraftList')!,
  ).products;

  return (
    <section className={styles.draft}>
      {draftList.length === 0 ? (
        <EmptyState
          navigateTo="/seller/add-card"
          buttonText="Добавить карточку"
        >
          Черновиков пока нет
        </EmptyState>
      ) : (
        <>
          <SellerTable mode="inOrder" />
          <ul className={styles.draft__list}>
            {draftList.map(
              (
                product: {
                  id: number;
                  image: string;
                  name: string;
                  vendor: {
                    name: string;
                  };
                  productionTime: string;
                },
                i: number,
              ) => (
                <SellerCard
                  key={product.id}
                  mode="inOrder"
                  {...product}
                  trash={true}
                  count={i + 1}
                />
              ),
            )}
          </ul>
        </>
      )}
    </section>
  );
};
