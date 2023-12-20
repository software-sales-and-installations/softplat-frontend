import styles from './Admin.module.scss';
import { FC } from 'react';
import CabinetMenu from '../../components/CabinetMenu/CabinetMenu';
import { Routes, Route, Navigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { AdminCardTable } from '../../components/AdminCardTable/AdminCardTable';
import { usePublicProductListQuery } from '../../utils/api/publicProductApi';
import { AdminVendorsCatalog } from '../../components/AdminVendorsCatalog/AdminVendorsCatalog';
import { AdminComplaintsTable } from '../../components/AdminComplaintsTable/AdminComplaintsTable';
import { AdminAddVendor } from '../../components/AdminAddVendor/AdminAddVendor';

export const Admin: FC = () => {
  const { data} = usePublicProductListQuery({
    minId: 0,
    pageSize: '',
    sort: 'NEWEST',
  });
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
          <Route path="/published" element={<AdminCardTable products={data?.products||[]} productStatus ={'PUBLISHED'}/>} />
          <Route path="/on-moderation" element={<AdminCardTable products={data?.products||[]} productStatus={'SHIPPED'}/>} />
          <Route path="/rejected" element={<AdminCardTable products={data?.products||[]} productStatus={'REJECTED'} />}/>
          <Route path="/appeal" element={<AdminComplaintsTable />}/>
          <Route path="/vendors" element={<AdminVendorsCatalog/>} />
          <Route path="/add-vendor" element={<AdminAddVendor/>} />
          <Route path ='/add-vendor/:id' element={<AdminAddVendor/>} />
          <Route path="/sales" element={<h2>Отчеты продаж</h2>} />
          <Route path="/contacts" element={<h2>Контакты</h2>} />
        </Routes>
      </section>
    </>
  );
};
