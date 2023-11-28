import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderNavBar.module.scss';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const HeaderNavbar: FC = () => {
<<<<<<< HEAD
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button type="button" className={styles.button}>
            Каталог
          </button>
        </li>
        <li className={styles.item}>
          <button type="button" className={styles.button}>
            Производители
          </button>
        </li>
        <li className={styles.item}>
          <Link to="/faq" className={styles.link}>
            FAQ
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/contacts" className={styles.link}>
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};
=======
    const location = useLocation();
    return (
        <nav>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to='/catalog' className={classNames(styles.link, location.pathname==='/catalog' ? styles.link_active : '')}>Каталог</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/producers' className={classNames(styles.link, location.pathname==='/producers' ? styles.link_active : '')}>Производители</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/faq' className={classNames(styles.link, location.pathname==='/faq' ? styles.link_active : '')}>FAQ</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/contacts' className={classNames(styles.link, location.pathname==='/contacts' ? styles.link_active : '')}>Контакты</Link>
                </li>
            </ul>
        </nav>
    )
}
>>>>>>> 01f67af82a573c8976c87cc333fbf83bd9547cb9
