import { IHeader } from './HeaderTypes';
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderNavbar } from '../HeaderNavBar/HeaderNavBar';
import { HeaderSearchForm } from '../HeaderSearchForm/HeaderSearchForm';
import { FaRegUser } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { popupState } from '../../UI/Popup/PopupSlice';
import { useDispatch } from 'react-redux';

export const Header: FC<IHeader> = ({ loggedIn }) => {
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__logo}>
        Logo
      </Link>
      <HeaderNavbar />
      <HeaderSearchForm />
      <div className={styles.btncontainer}>
        {loggedIn ? (
          <button type="button" className={styles.btncontainer__likebtn} />
        ) : null}
        <button type="button" className={styles.btncontainer__shopbtn} />
        {loggedIn ? (
          <button type="button" className={styles.btncontainer__profile}>
            <FaRegUser className={styles.btncontainer__profileicon} />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => dispatch(popupState(true))}
            className={styles.btncontainer__profileenter}
          >
            Войти
          </button>
        )}
      </div>
    </header>
  );
};
