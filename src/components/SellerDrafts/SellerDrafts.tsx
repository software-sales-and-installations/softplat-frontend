import { FC } from 'react';
import styles from './SellerDrafts.module.scss';
import EmptyState from '../EmptyState/EmptyState';
import { useProductDeleteOwnCardMutation } from '../../utils/api/userProductApi';
import { useSellerProductListQuery } from '../../utils/api/sellerApi';
import { useState, useEffect } from 'react';
import { IProductCard } from '../ProductCard/ProductCardTypes';

export const SellerDrafts: FC = () => {
  let count = 0;
  const { data: cards, isSuccess: isDraftListSuccess } =
  useSellerProductListQuery(
    {
      status: 'DRAFT',
    },
    { refetchOnMountOrArgChange: true },
  );
  const [draftCards, setDraftCards] = useState(cards);
  useEffect(() => {
    setDraftCards(cards);
  }, [cards]);
  useEffect(() => {
    setDraftCards(draftCards);
  }, [draftCards]);
  function deleteCard(id: number){
    console.log(draftCards)
    console.log(draftCards?.products.filter((i: IProductCard)=>i.id!==id))
    setDraftCards({products: draftCards?.products.filter((i: IProductCard)=>i.id!==id)})
  }
   const [productDeleteOwnCard, {
    // isFetching, isLoading, isError
  }] = useProductDeleteOwnCardMutation();
  const handleProductDeleteOwnCard = (productId: number) => {
    productDeleteOwnCard(productId).unwrap()
      .then((res) => {
        console.log(res)
        deleteCard(productId)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally()
  };
  return (
    <section className={styles.draft}>
      {draftCards?.products?.length === 0 ? (
        <EmptyState
          navigateTo="/seller/add-card"
          buttonText="Добавить карточку"
        >
          Черновиков пока нет
        </EmptyState>
      ) : (
        <>
          <div className={styles.container__header}>
            <p className={styles.container__headerNum}>№</p>
            <p className={styles.container__headerName}>Наименование</p>
            <p className={styles.container__headerVendor}>Вендор</p>
            <p className={styles.container__headerArt}>Артикул</p>
            <p className={styles.container__headerData}>Дата</p>
          </div>
          {draftCards?.products?.map((i: IProductCard) => {
            count = count + 1;
            return (
              <div className={styles.container__line} key={i.id}>
                <p className={styles.container__headerNum}>{count}</p>
                <p className={styles.container__headerName}>{i.name}</p>
                <p className={styles.container__headerVendor}>
                  {i.vendor?.name || '-'}
                </p>
                <p className={styles.container__headerArt}>{i.id}</p>
                <p className={styles.container__headerData}>{''}</p>
                <button
                  className={styles.container__trash}
                  type="button"
                  onClick = {()=>handleProductDeleteOwnCard(i.id)}
                ></button>
              </div>
            );
          })}
        </>
      )}
    </section>
  );
};
