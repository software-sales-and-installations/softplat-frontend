import styles from './CabinetMenu.module.scss';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../services/redux/store';
import { popupState } from '../../UI/Popup/PopupSlice';
import {
  personalMenuItems,
  sellerMenuItems,
  adminMenuItems,
} from '../../utils/constants';
import { ICabinetMenuProps } from './CabinetMenuTypes';

const CabinetMenu: React.FC<ICabinetMenuProps> = ({ mode }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <nav className={styles.personalTitles}>
        {(mode === 'user'
          ? personalMenuItems
          : mode === 'seller'
          ? sellerMenuItems
          : adminMenuItems
        ).map(item => (
          <NavLink
            to={item.link}
            key={item.id}
            style={
              (mode === 'seller' &&
                (item.name === 'Черновики' ||
                  item.name === 'На доработке' ||
                  item.name === 'Отчеты продаж')) ||
              (mode === 'admin' && item.name === 'Жалобы')
                ? { marginBottom: '35px' }
                : {}
            }
            className={({ isActive }) =>
              `${styles.personalTitles__titles} ${
                isActive ? styles.personalTitles__titles_active : ''
              }`
            }
          >
            {item.name}
            {/* <div className={styles.personalTitles__counter}>3</div> */}
          </NavLink>
        ))}
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

export default CabinetMenu;
