import { FC } from 'react';
import styles from './HeaderNavBar.module.scss';
import { Link } from 'react-router-dom';


export const HeaderNavbar: FC = () => {
    return (
        <nav>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <button type='button' className={styles.button}>Каталог</button>
                </li>
                <li className={styles.item}>
                    <button type='button' className={styles.button}>Производители</button>
                </li>
                <li className={styles.item}>
                    <Link to='/faq' className={styles.link}>FAQ</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/contacts' className={styles.link}>Контакты</Link>
                </li>
            </ul>
        </nav>
    )
}
