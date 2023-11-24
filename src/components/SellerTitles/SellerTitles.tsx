import styles from '../PersonalTitles/PersonalTitles.module.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch } from '../../services/redux/store';
import { popupState } from '../../UI/Popup/PopupSlice';

const SellerTitles: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  return (
    <>
      <nav className={styles.personalTitles}>
        <Link
          to="products"
          className={classNames(
            styles.personalTitles__titles,
            location.pathname === '/seller/products'
              ? styles.personalTitles__titles_active
              : '',
          )}
        >
          Мои товары
        </Link>
        <Link
          to="analysis"
          className={classNames(
            styles.personalTitles__titles,
            location.pathname === '/seller/analysis'
              ? styles.personalTitles__titles_active
              : '',
          )}
        >
          Аналитика
        </Link>
        <Link
          to="settings"
          className={classNames(
            styles.personalTitles__titles,
            location.pathname === '/seller/settings'
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

export default SellerTitles;

