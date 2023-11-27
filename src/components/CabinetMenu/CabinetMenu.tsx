import styles from './CabinetMenu.module.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch } from '../../services/redux/store';
import { popupState } from '../../UI/Popup/PopupSlice';
import { useAppSelector } from '../../services/redux/store';
import { selectUser } from '../../services/redux/slices/user/user';



const CabinetMenu: React.FC = () => {
  const user = useAppSelector(selectUser);
  const location = useLocation();
  const dispatch = useAppDispatch();
  return (
    <>
      <nav className={styles.personalTitles}>
        <Link
          to={user.role==='BUYER'? "purchases" : 'products'}
          className={classNames(styles.personalTitles__titles, (location.pathname==='/personal/purchases' || location.pathname==='/seller/products') ? styles.personalTitles__titles_active : '')}
        >
          {user.role==='BUYER'? 'Мои покупки' : 'Мои товары'}
        </Link>
        <Link to={user.role==='BUYER'?"favorites":'analytics'} className={classNames(styles.personalTitles__titles, (location.pathname==='/personal/favorites' || location.pathname==='seller/analytics') ? styles.personalTitles__titles_active : '')}>
          {user.role==='BUYER'?'Избранное': 'Аналитика'}
        </Link>
        <Link to="settings" className={classNames(styles.personalTitles__titles, (location.pathname===('/personal/settings' || '/seller/settings')) ? styles.personalTitles__titles_active : '')}>
          Настройки
        </Link>
        <button type='button' onClick={()=>dispatch(popupState(true))} className={styles.personalTitles__btn}>
          Выйти из профиля
        </button>
      </nav>
    </>
  );
};

export default CabinetMenu;
