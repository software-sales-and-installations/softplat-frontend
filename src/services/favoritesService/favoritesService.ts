import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { useBuyerFavoritesQuery } from '../../utils/api/buyerApi';
import { setFavorites } from '../redux/slices/favourites/favourites';
import { ICartItem } from '../../components/ProductListCart/ProductListTypes';

export interface IFavorite {
  product: ICartItem;
  userId: number;
}

export const useLoadFavorites = () => {
  const userId = localStorage.getItem('userId');
  const userStoreId = useAppSelector(store => store.user.user.id);

  const favoritesData = useBuyerFavoritesQuery(undefined, {
    skip: !userId && !userStoreId,
  });

  useEffect(() => {
    if (favoritesData.data) {
      favoritesData.refetch();
    }
  }, [userStoreId, favoritesData.data]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (favoritesData.currentData && userId) {
      const productIds = favoritesData.currentData.favorites.map(
        (favorite: IFavorite) => favorite.product.id,
      );
      dispatch(setFavorites(productIds));
    }
  }, [favoritesData, dispatch]);
};
