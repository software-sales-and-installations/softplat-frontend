import styles from './PersonalTitles.module.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch } from '../../services/redux/store';
import { popupState } from '../../UI/Popup/PopupSlice';

const PersonalTitles: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  return (
    <>
      <nav className={styles.personalTitles}>
        <Link
          to="purchases"
          className={classNames(
            styles.personalTitles__titles,
            location.pathname === '/personal/purchases'
              ? styles.personalTitles__titles_active
              : '',
          )}
        >
          Мои покупки
        </Link>
        <Link
          to="favorites"
          className={classNames(
            styles.personalTitles__titles,
            location.pathname === '/personal/favorites'
              ? styles.personalTitles__titles_active
              : '',
          )}
        >
          Избранное
        </Link>
        <Link

          to="settings"
          className={classNames(
            styles.personalTitles__titles,
            location.pathname === '/personal/settings'
              ? styles.personalTitles__titles_active
              : '',
          )}
        >
          Настройки
        </Link>
        <button
          type="button"
          onClick={() => dispatch(popupState(true))}
          className={styles.personalTitles__btn}
        >
          Выйти из профиля
        </button>
      </nav>
    </>
  );
};

export default PersonalTitles;
