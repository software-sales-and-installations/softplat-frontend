import styles from './PersonalTitles.module.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

const PersonalTitles: React.FC = () => {
  const location = useLocation();
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
        <Link to="sign-out" className={styles.personalTitles__titles}>
          Выйти из профиля
        </Link>
      </nav>
    </>
  );
};

export default PersonalTitles;
