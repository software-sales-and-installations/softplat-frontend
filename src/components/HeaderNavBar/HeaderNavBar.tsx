import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderNavBar.module.scss';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const HeaderNavbar: FC = () => {
  const location = useLocation();
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            to="/catalog"
            className={classNames(
              styles.link,
              location.pathname === '/catalog' ? styles.link_active : '',
            )}
          >
            Каталог
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            to="/producers"
            className={classNames(
 
             styles.link,
              location.pathname === '/producers' ? styles.link_active : '',
            )}
          >
            Производители
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            to="/faq"
            className={classNames(
              styles.link,
              location.pathname === '/faq' ? styles.link_active : '',
            )}
          >
            FAQ
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            to="/contacts"
            className={classNames(
              styles.link,
              location.pathname === '/contacts' ? styles.link_active : '',
            )}
          >
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};
