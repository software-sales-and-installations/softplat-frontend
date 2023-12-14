import { useEffect } from 'react';
import { useAppDispatch } from '../redux/store';
import { useBuyerFavoritesQuery } from '../../utils/api/buyerApi';
import { setFavorites } from '../redux/slices/favourites/favourites';
import { ICartItem } from '../../components/ProductListCart/ProductListTypes';




export interface IFavorite {
    product: ICartItem;
    userId: number;
}


export const useLoadFavorites = () => {
  const userId = localStorage.getItem('userId');
  console.log(userId);
  
  const dispatch = useAppDispatch();

  const favoritesData = useBuyerFavoritesQuery(undefined);
    // console.log(favoritesData?.currentData?.favorites);
  useEffect(() => {
    if (favoritesData.currentData && userId) {
      const productIds = favoritesData.currentData.favorites.map((favorite: IFavorite) => favorite.product.id);
      dispatch(setFavorites(productIds));
    }
  }, [favoritesData, dispatch]);
};
