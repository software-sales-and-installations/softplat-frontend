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

export const Seller: FC = () => {
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
