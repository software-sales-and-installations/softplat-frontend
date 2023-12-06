import { FC } from 'react';
import styles from './Seller.module.scss';
import CabinetMenu from '../../components/CabinetMenu/CabinetMenu';
import { Routes, Route } from 'react-router-dom';
import SellerCabinetContent from '../../components/SellerCabinetContent/SellerCabinetContent';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

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
          <Route path="/products" element={<h2>На модерации</h2>} />
          <Route path="/products" element={<h2>На доработке</h2>} />
          <Route path="/products" element={<h2>Отчеты продаж</h2>} />
          <Route path="/products" element={<h2>Банковские реквизиты</h2>} />
          <Route path="/products" element={<h2>Данные профиля</h2>} />
          <Route path="/products" element={<h2>Смена пароля</h2>} />
        </Routes>
      </section>
    </>
  );
};
