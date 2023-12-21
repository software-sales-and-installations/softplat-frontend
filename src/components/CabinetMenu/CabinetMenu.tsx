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
import { useComplaintListQuery } from '../../utils/api/complaintApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { useComplaintSellerListQuery } from '../../utils/api/complaintApi';

const CabinetMenu: React.FC<ICabinetMenuProps> = ({ mode }) => {
  const totalDraft =
    mode === 'seller' &&
    (localStorage.getItem('sellerDraftList')
      ? JSON.parse(
          JSON.parse(localStorage.getItem('sellerDraftList')!).totalProducts,
        )
      : 0);
  const totalPublished =
    mode === 'seller' &&
    (localStorage.getItem('sellerPublishedList')
      ? JSON.parse(localStorage.getItem('sellerPublishedList')!).totalProducts
      : 0);
  const totalRejected =
    mode === 'seller' &&
    (localStorage.getItem('sellerRejectedList')
      ? JSON.parse(localStorage.getItem('sellerRejectedList')!).totalProducts
      : 0);
  const totalShipped =
    mode === 'seller' &&
    (localStorage.getItem('sellerShippedList')
      ? JSON.parse(localStorage.getItem('sellerShippedList')!).totalProducts
      : 0);

  const [complaints, setComplaints] = useState(
    localStorage.getItem('complaints') || '0',
  );
  const dispatch = useAppDispatch();
  console.log(localStorage.getItem('role'));
  const role = localStorage.getItem('role');
  const { data: complaintList = [] } = useComplaintListQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    },
  );
  const { data: complaintSellerList = [] } = useComplaintSellerListQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    },
  );
  useEffect(() => {
    if (role === 'ADMIN' || 'SELLER') {
      console.log(complaintList);
      localStorage.setItem(
        'complaints',
        complaintList?.totalComplaints || complaintSellerList?.totalComplaints,
      );
      setComplaints(
        complaintList.totalComplaints || complaintSellerList.totalComplaints,
      );
    }
  }, [complaintList, complaintSellerList]);
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
                  item.name === 'Жалобы' ||
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
            <div>
              {(mode === 'admin' || mode === 'seller') &&
              item.name === 'Жалобы' ? (
                <div className={styles.personalTitles__counter}>
                  {complaints}
                </div>
              ) : null}
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
