// import { IHeader } from "./HeaderTypes";
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderNavbar } from '../HeaderNavBar/HeaderNavBar';
import { HeaderSearchForm } from '../HeaderSearchForm/HeaderSearchForm';
import { FaRegUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { popupState } from '../../UI/Popup/PopupSlice';
import { ResultPopup } from '../ResultPopup/ResultPopup';
import { useAppDispatch } from '../../services/redux/store';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../services/redux/store';
import { selectUser } from '../../services/redux/slices/user/user';
import { RootState } from '../../services/redux/store';

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const [token, setToken] = useState(localStorage.getItem('token'));
  const role = localStorage.getItem('role');
  const user = useAppSelector(selectUser);
  const signout = useAppSelector((state: RootState) => state.signout.signout);
  const location = useLocation();

  if (
    location.pathname !== '/cart' &&
    !location.pathname.includes('/product/')
  ) {
    localStorage.setItem('urlPath', location.pathname);
  }

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [signout, user]);
  useEffect(() => {}, [token]);
  return (
    <header className={styles.header}>
      <Link to="/catalog" className={styles.header__logo}>
        Logo
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
            <Link to="/cart" className={styles.btncontainer__shopbtn} />{' '}
          </>
        ) : !token ? (
          <Link to="/cart" className={styles.btncontainer__shopbtn} />
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
            <FaRegUser className={styles.btncontainer__profileicon} />
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
