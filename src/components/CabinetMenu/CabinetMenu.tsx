import styles from './CabinetMenu.module.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch } from '../../services/redux/store';
import { popupState } from '../../UI/Popup/PopupSlice';

const CabinetMenu: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const role = localStorage.getItem('role');

  return (
    <>
      <nav className={styles.personalTitles}>
        <Link
          to={role==='BUYER'? "purchases" : 'products'}
          className={classNames(styles.personalTitles__titles, (location.pathname==='/personal/purchases' || location.pathname==='/seller/products') ? styles.personalTitles__titles_active : '')}
        >
          {role==='BUYER'? 'Мои покупки' : 'Мои товары'}
        </Link>
        <Link to={role==='BUYER'?"favorites":'analytics'} className={classNames(styles.personalTitles__titles, (location.pathname==='/personal/favorites' || location.pathname==='seller/analytics') ? styles.personalTitles__titles_active : '')}>
          {role==='BUYER'?'Избранное': 'Аналитика'}
        </Link>
        <Link to="settings" className={classNames(styles.personalTitles__titles, (location.pathname===('/personal/settings' || '/seller/settings' || '/admin/settings')) ? styles.personalTitles__titles_active : '')}>
          Настройки
        </Link>
        {user.role==='ADMIN'? <Link to='vendors' className={classNames(styles.personalTitles__titles, (location.pathname==='/admin/contacts') ? styles.personalTitles__titles_active : '')} >Контакты</Link>: null}
        <button type='button' onClick={()=>dispatch(popupState(true))} className={styles.personalTitles__btn}>
          Выйти из профиля
        </button>
      </nav>
    </>
  );
};

export default CabinetMenu;
