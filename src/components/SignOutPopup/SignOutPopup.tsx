import { FC } from 'react';
import { Popup } from '../../UI/Popup/Popup';
import styles from '../../UI/Popup/Popup.module.scss';
import { Button } from '../../UI/Button/Button';
import { useAppDispatch } from '../../services/redux/store';
import { popupState } from '../../UI/Popup/PopupSlice';
import { useNavigate } from 'react-router-dom';
import { useAuthLogoutMutation } from '../../utils/api/authApi';
import { signout } from './SignOutPopupSlice';
import { clearFavorites } from '../../services/redux/slices/favourites/favourites';
import { clearCart } from '../../services/redux/slices/cart/cart';
import { useBuyerFavoritesQuery } from '../../utils/api/buyerApi';
import { signOut } from '../../services/redux/slices/user/user';

export const SignOutPopup: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handlePopupClose() {
    dispatch(popupState(false));
  }
  const [
    authLogout,
    {
      // isFetching, isLoading, isError
    },
  ] = useAuthLogoutMutation();

  const handleSubmitLogout = () => {
    // @ts-ignore
    authLogout()
      .unwrap()
      .then(userData => {
        localStorage.clear();
        navigate('/', { replace: true });
        dispatch(popupState(false));
        dispatch(signOut());
        dispatch(signout(true));

        dispatch(clearFavorites());
        dispatch(clearCart());

        console.log(userData);
      })
      .catch(error => {
        console.log(error);
      })
      .finally();
  };

  return (
    <Popup>
      <h2 className={styles.popup__role}>Выход</h2>
      <p className={styles.popup__exittext}>
        Вы действительно хотите выйти из аккаунта?
      </p>
      <div className={styles.popup__exitcontainerbtn}>
        <Button mode="primary" onClick={handleSubmitLogout}>
          Выход
        </Button>
        <Button onClick={handlePopupClose} mode="secondary" type="button">
          Отмена
        </Button>
      </div>
    </Popup>
  );
};
