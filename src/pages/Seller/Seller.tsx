import { FC } from 'react';
import styles from './Seller.module.scss';
import CabinetMenu from '../../components/CabinetMenu/CabinetMenu';
import { Routes, Route } from 'react-router-dom';
import PasswordSettings from '../../components/PasswordSettings/PasswordSettings';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { SellerSettings } from '../../components/SellerSettings/SellerSettings';
import { SellerBankSettings } from '../../components/SellerBankSettings/SellerBankSettings';
import { SellerAddNewCard } from '../../components/SellerAddNewCard/SellerAddNewCard';
import { SellerDrafts } from '../../components/SellerDrafts/SellerDrafts';
import SellerPublished from '../../components/SellerPublished/SellerPublished';
import SellerModeration from '../../components/SellerModeration/SellerModeration';
import SellerCorrection from '../../components/SellerCorrection/SellerCorrection';
import SellerSales from '../../components/SellerSales/SellerSales';
import { useSellerProductListQuery } from '../../utils/api/sellerApi';

export const Seller: FC = () => {
  const { data: draftList, isSuccess: isDraftListSuccess } =
    useSellerProductListQuery(
      {
        status: 'DRAFT',
      },
      { refetchOnMountOrArgChange: true },
    );
  const { data: publishedList, isSuccess: isPublishedListSuccess } =
    useSellerProductListQuery(
      {
        status: 'PUBLISHED',
      },
      { refetchOnMountOrArgChange: true },
    );
  const { data: rejectedList, isSuccess: isRejectedListSuccess } =
    useSellerProductListQuery(
      {
        status: 'REJECTED',
      },
      { refetchOnMountOrArgChange: true },
    );
  const { data: shippedList, isSuccess: isShippedListSuccess } =
    useSellerProductListQuery(
      {
        status: 'SHIPPED',
      },
      { refetchOnMountOrArgChange: true },
    );

  if (
    isDraftListSuccess &&
    isPublishedListSuccess &&
    isRejectedListSuccess &&
    isShippedListSuccess
  ) {
    localStorage.setItem('sellerDraftList', JSON.stringify(draftList));
    localStorage.setItem('sellerPublishedList', JSON.stringify(publishedList));
    localStorage.setItem('sellerRejectedList', JSON.stringify(rejectedList));
    localStorage.setItem('sellerShippedList', JSON.stringify(shippedList));
  }

  return (
    <>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs />
      </div>
      <section className={styles.seller}>
        <div className={styles.seller__titles}>
          <CabinetMenu mode="seller" />
        </div>
        <Routes>
          <Route path="/add-card" element={<SellerAddNewCard />} />
          <Route path="/drafts" element={<SellerDrafts />} />
          <Route path="/published" element={<SellerPublished />} />
          <Route path="/on-moderation" element={<SellerModeration />} />
          <Route path="/correction" element={<SellerCorrection />} />
          <Route path="/appeal" element={<h2>Жалобы</h2>} />
          <Route path="/sales" element={<SellerSales />} />
          <Route path="/bank-details" element={<SellerBankSettings />} />
          <Route path="/settings" element={<SellerSettings />} />
          <Route path="/password" element={<PasswordSettings />} />
        </Routes>
      </section>
    </>
  );
};
