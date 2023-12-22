import { useEffect, useState } from 'react';

import { RootState, useAppDispatch, useAppSelector } from '../../../services/redux/store.ts';
import { selectUser } from '../../../services/redux/slices/user/user.ts';

import {
  useBuyerAddFavoritesMutation,
  useBuyerDeleteFavoritesMutation,
} from '../../../utils/api/buyerApi.tsx';
import {
  addToFavorites,
  ayncToggleFavorite,
  removeFromFavorites,
} from '../../../services/redux/slices/favourites/favourites.tsx';

import { Checkbox } from '../../../UIStorybook/Checkbox/Checkbox.tsx';
import { AddToCartButton } from '../../AddToCartButton/AddToCartButton.tsx';
import { Button } from '../../../UIStorybook/Button/Button.tsx';
import { Icons } from '../../../UIStorybook/Icons/Icons.tsx';

import styles from './ProductButtons.module.scss'

interface IProductButtons {
  error: boolean;
  id: string | undefined;
  instPrice: number | undefined;
}
const ProductButtons = ({error, id, instPrice}: IProductButtons) => {
  const signout = useAppSelector((state: RootState) => state.signout.signout);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [role, setRole] = useState(localStorage.getItem('role'));
  const [isInstallationSelected, setIsInstallationSelected] = useState(false);
  const user = useAppSelector(selectUser);
  const favorites = useAppSelector(state => state.favorite?.favorites);
  const isFavorite = favorites?.some(item => item.toString() === id);
  const [addFavorites] = useBuyerAddFavoritesMutation();
  const [deleteFavorites] = useBuyerDeleteFavoritesMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setRole(localStorage.getItem('role'));
  }, [signout, user]);

  const handleToggleFavorite = async () => {
    const action = isFavorite ? deleteFavorites : addFavorites;
    await ayncToggleFavorite(action, Number(id));
    dispatch(
      isFavorite ? removeFromFavorites(Number(id)) : addToFavorites(Number(id)),
    );
  };

  const handleCheckboxChange = () => {
    setIsInstallationSelected(prev => !prev);
  };

  return (
<>
      <div className={styles.productInfo__installation}>
          <Checkbox onCheck={handleCheckboxChange} extClassName={styles.productInfo__checkbox} label={`Добавить установку ${instPrice} ₽`} />
      </div>
  <div className={styles.productInfo__buttons}>
  <AddToCartButton id={id} isInstallationSelected={isInstallationSelected} type='big' />
      {(role==='BUYER' || !token)?  <Button buttonType='link' onClick={handleToggleFavorite} disabled={error}>{isFavorite ? <Icons type='filledLike' size={35}/> :
            <Icons type='emptyLike' size={35}/>}</Button> : null}
  </div>
  </>
  );
}

export default ProductButtons;
