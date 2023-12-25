import {  useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './PersonalFavorites.module.scss';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { fetchAllCards } from '../../services/redux/slices/cards/cards';
import { useLoadFavorites } from '../../services/favoritesService/favoritesService';
import EmptyState from '../EmptyState/EmptyState';
import { IProductCard, ProductStatus } from '../ProductCard/ProductCardTypes.tsx';
import { usePublicProductListQuery } from '../../utils/api/publicProductApi.tsx';

const PersonalFavorites: React.FC = () => {
  const dispatch = useAppDispatch();
  const favoriteIds = useAppSelector(store => store?.favorite?.favorites);

  useLoadFavorites();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchAllCards());
    };

    fetchData();
  }, [dispatch, favoriteIds]);

    const { data } = usePublicProductListQuery({
      minId: 0,
      pageSize: 30,
      sort: 'NEWEST',
    });

  const recommendedCards = data?.products.filter(
    (card: IProductCard) =>
      card.productStatus === ProductStatus.PUBLISHED && card.quantity > 0,
  );

  const favoriteCards = recommendedCards?.filter((card: { id: number; }) => favoriteIds.includes(card.id)) || [];

  return (
    <section className={styles.personalFavorites}>
      {favoriteCards.length === 0 && (
        <EmptyState navigateTo="/catalog" buttonText="Каталог">
          Вы еще ничего не добавили в избранное
        </EmptyState>
      )}
      <ul className={styles.personalFavorites__list}>
        {favoriteCards.map((card: IProductCard) => (
          <li key={card.id} className={styles.personalFavorites__item}>
            <ProductCard card={card} key={card.id} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PersonalFavorites;
