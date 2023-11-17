import styles from './PersonalTitles.module.scss';
import { Link } from 'react-router-dom';

type Props = {};

const PersonalTitles: React.FC = (props: Props) => {
  return (
    <>
      <nav className={styles.personalTitles}>
        <Link
          to="/personal/purchases"
          className={styles.personalTitles__titles}
        >
          Мои покупки
        </Link>
        <Link to="/personal/favorites" className={styles.personalTitles__titles}>
          Избранное
        </Link>
        <Link to="settings" className={styles.personalTitles__titles}>
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
