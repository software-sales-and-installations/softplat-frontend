import { FC } from 'react';
import styles from './Seller.module.scss';
import CabinetMenu from '../../components/CabinetMenu/CabinetMenu';
import { Routes, Route } from 'react-router-dom';
import PasswordSettings from '../../components/PasswordSettings/PasswordSettings';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { SellerSettings } from '../../components/SellerSettings/SellerSettings';
import { SellerBankSettings } from '../../components/SellerBankSettings/SellerBankSettings';

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
          <Route path="/add-card" element={<h2>Добавить карточку</h2>} />
          <Route path="/drafts" element={<h2>Черновики</h2>} />
          <Route path="/published" element={<h2>Опубликовано</h2>} />
          <Route path="/on-moderation" element={<h2>На модерации</h2>} />
          <Route path="/correction" element={<h2>На доработке</h2>} />
          <Route path="/appeal" element={<h2>Жалобы</h2>} />
          <Route path="/sales" element={<h2>Отчеты продаж</h2>} />
          <Route path="/bank-details" element={<SellerBankSettings/>} />
          <Route path="/settings" element={<SellerSettings/>} />
          <Route path="/password" element={<PasswordSettings/>} />
        </Routes>
      </section>
    </>
  );
};
