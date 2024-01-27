// import { IHeader } from "./HeaderTypes";
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderNavbar } from '../HeaderNavBar/HeaderNavBar';
import { HeaderSearchForm } from '../HeaderSearchForm/HeaderSearchForm';
import { Link, useLocation } from 'react-router-dom';
import { popupState } from '../../UI/Popup/PopupSlice';
import { ResultPopup } from '../ResultPopup/ResultPopup';
import { useAppDispatch } from '../../services/redux/store';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../services/redux/store';
import { selectUser } from '../../services/redux/slices/user/user';
import { RootState } from '../../services/redux/store';
import logo from '../../images/logo.svg';

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [role, setRole] = useState(localStorage.getItem('role'));
  const user = useAppSelector(selectUser);
  const signout = useAppSelector((state: RootState) => state.signout.signout);
  const location = useLocation();
  const email = localStorage.getItem('email');
  const countBasketItems = useAppSelector(store => store.cart.items).reduce(
    (summ, item) => summ + item.quantity,
    0,
  );
  console.log(countBasketItems);

  if (
    location.pathname !== '/cart' &&
    !location.pathname.includes('/seller-page') &&
    !location.pathname.includes('/product/')
  ) {
    localStorage.setItem('urlPath', location.pathname);
  }

  if (location.pathname !== '/cart') {
    if (location.pathname.includes('/seller-page')) {
      localStorage.setItem('isSellerVisited', 'true');
    } else {
      localStorage.removeItem('isSellerVisited');
    }
  }

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setRole(localStorage.getItem('role'));
  }, [signout, user]);
  useEffect(() => {}, [token]);
  function handleNonAuthLikeClick() {
    dispatch(popupState(true));
  }
  return (
    <header className={styles.header}>
      <Link className={styles.header__logoLink} to="/catalog">
        <img src={logo} alt="Логотип" className={styles.header__logo} />
      </Link>
      <HeaderNavbar />
      <HeaderSearchForm />
      <div className={styles.btncontainer}>
        {role === 'BUYER' ? (
          <>
            <Link
              to="personal/favorites"
              className={styles.btncontainer__likebtn}
            />

            <Link to="/cart" className={styles.btncontainer__shopbtn}>
              {countBasketItems > 0 && (
                <span className={styles.btncontainer__basketCount}>
                  {countBasketItems}
                </span>
              )}
            </Link>
          </>
        ) : !token ? (
          <>
            <button
              className={styles.btncontainer__likebtn}
              onClick={handleNonAuthLikeClick}
            />
            <Link to="/cart" className={styles.btncontainer__shopbtn}>
              {countBasketItems > 0 && (
                <span className={styles.btncontainer__basketCount}>
                  {countBasketItems}
                </span>
              )}
            </Link>{' '}
          </>
        ) : null}
        {token ? (
          <Link
            to={
              role === 'BUYER'
                ? '/personal'
                : role === 'ADMIN'
                ? '/admin'
                : '/seller'
            }
            className={styles.btncontainer__profile}
          >
            <p className={styles.btncontainer__profileicon}>
              {email ? email[0].toUpperCase() : user.email ? user.email[0] : ''}
            </p>
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => {
              dispatch(popupState(true));
            }}
            className={styles.btncontainer__profileenter}
          >
            Войти
          </button>
        )}
      </div>
      <ResultPopup />
    </header>
  );
};
