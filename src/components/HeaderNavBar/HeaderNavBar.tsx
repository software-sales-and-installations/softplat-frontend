import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderNavBar.module.scss';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import DropDown from '../../UI/DropDown/DropDown';
import { SelectorType } from '../../UI/DropDown/DropDownTypes';
import { CATALOGUE_NAMES } from '../../utils/constants';

export const HeaderNavbar: FC = () => {
    const location = useLocation();
    const catalogOptions = CATALOGUE_NAMES.map(i => ({value: i.pathName, label: i.name}))

    return (
        <nav>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to='/catalog' className={classNames(styles.link, location.pathname==='/catalog' ? styles.link_active : '')}>Каталог</Link>
                    <DropDown  type={SelectorType.CATALOG} isMultiOption={false} options={catalogOptions}/>
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
