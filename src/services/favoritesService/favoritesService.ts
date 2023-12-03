import { useEffect } from 'react';
import { useAppDispatch } from '../redux/store';
import { useBuyerFavoritesQuery } from '../../utils/api/buyerApi';
import { setFavorites } from '../redux/slices/favourites/favourites';
import { ICartItem } from '../../components/ProductListCart/ProductListTypes';




interface IFavorite {
    product: ICartItem;
    userId: number;
}


export const useLoadFavorites = () => {
  const dispatch = useAppDispatch();
  //@ts-ignore
  const favoritesData = useBuyerFavoritesQuery();
    // console.log(favoritesData?.currentData?.favorites);
  useEffect(() => {
    if (favoritesData && favoritesData.currentData) {
      const productIds = favoritesData.currentData.favorites.map((favorite: IFavorite) => favorite.product.id);
      dispatch(setFavorites(productIds));
    }
  }, [favoritesData, dispatch]);
};
