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
  const isSeller = mode === 'seller';
  const isAdmin = mode === 'admin';
  const isUser = mode === 'user';

  const totalDraft = isSeller
    ? localStorage.getItem('sellerDraftList')
      ? JSON.parse(
          JSON.parse(localStorage.getItem('sellerDraftList')!).totalProducts,
        )
      : 0
    : isAdmin
    ? localStorage.getItem('adminDraftList')
      ? JSON.parse(
          JSON.parse(localStorage.getItem('adminDraftList')!).totalProducts,
        )
      : 0
    : 0;
  const totalPublished = isSeller
    ? localStorage.getItem('sellerPublishedList')
      ? JSON.parse(localStorage.getItem('sellerPublishedList')!).totalProducts
      : 0
    : isAdmin
    ? localStorage.getItem('adminPublishedList')
      ? JSON.parse(localStorage.getItem('adminPublishedList')!).totalProducts
      : 0
    : 0;
  const totalRejected = isSeller
    ? localStorage.getItem('sellerRejectedList')
      ? JSON.parse(localStorage.getItem('sellerRejectedList')!).totalProducts
      : 0
    : isAdmin
    ? localStorage.getItem('adminRejectedList')
      ? JSON.parse(localStorage.getItem('adminRejectedList')!).totalProducts
      : 0
    : 0;
  const totalShipped = isSeller
    ? localStorage.getItem('sellerShippedList')
      ? JSON.parse(localStorage.getItem('sellerShippedList')!).totalProducts
      : 0
    : isAdmin
    ? localStorage.getItem('adminShippedList')
      ? JSON.parse(localStorage.getItem('adminShippedList')!).totalProducts
      : 0
    : 0;
  const totalComplaints = isSeller
    ? localStorage.getItem('sellerComplaintList')
      ? JSON.parse(localStorage.getItem('sellerComplaintList')!).totalComplaints
      : 0
    : isAdmin
    ? localStorage.getItem('adminComplaintList')
      ? JSON.parse(localStorage.getItem('adminComplaintList')!).totalComplaints
      : 0
    : 0;

  return (
    <>
      <nav className={styles.personalTitles}>
        {(isUser
          ? personalMenuItems
          : isSeller
          ? sellerMenuItems
          : adminMenuItems
        ).map(item => (
          <NavLink
            to={item.link}
            key={item.id}
            style={
              (isSeller &&
                (item.name === 'Черновики' ||
                  item.name === 'Жалобы' ||
                  item.name === 'Отчеты продаж')) ||
              (isAdmin && item.name === 'Жалобы')
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
            <div>
              {(isAdmin || isSeller) &&
                ((item.name === 'Черновики' && totalDraft !== 0) ||
                (item.name === 'Опубликовано' && totalPublished !== 0) ||
                (item.name === 'На модерации' && totalShipped !== 0) ||
                ((item.name === 'На доработке' ||
                  item.name === 'Отклоненные') &&
                  totalRejected !== 0) ||
                (item.name === 'Жалобы' && totalComplaints !== 0) ? (
                  <div className={styles.personalTitles__counter}>
                    {item.name === 'Черновики'
                      ? totalDraft
                      : item.name === 'Опубликовано'
                      ? totalPublished
                      : item.name === 'На модерации'
                      ? totalShipped
                      : item.name === 'На доработке' ||
                        item.name === 'Отклоненные'
                      ? totalRejected
                      : item.name === 'Жалобы'
                      ? totalComplaints
                      : ''}
                  </div>
                ) : null)}
            </div>
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
