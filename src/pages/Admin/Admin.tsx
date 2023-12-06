import styles from './Admin.module.scss';
import { FC } from 'react';
import CabinetMenu from '../../components/CabinetMenu/CabinetMenu';
import { Routes, Route } from 'react-router-dom';
import { AdminCards } from '../../components/AdminCards/AdminCards';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export const Admin: FC = () => {
  return (
    <>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs />
      </div>
      <section className={styles.admin}>
        <div className={styles.admin__titles}>
          <CabinetMenu mode="admin" />
        </div>
        <Routes>
          <Route path="/published" element={<h2>Опубликовано</h2>} />
          <Route path="/on-moderation" element={<h2>На модерации</h2>} />
          <Route path="/rejected" element={<h2>Отклоненные</h2>} />
          <Route path="/appeal" element={<h2>Жалобы</h2>} />
          <Route path="/vendors" element={<h2>Вендоры</h2>} />
          <Route path="/add-vendor" element={<h2>Добавить вендора</h2>} />
          <Route path="/sales" element={<h2>Отчеты продаж</h2>} />
          <Route path="/contacts" element={<h2>Контакты</h2>} />
        </Routes>
      </section>
    </>
  );
};
