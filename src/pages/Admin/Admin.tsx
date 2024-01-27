import styles from './Admin.module.scss';
import { FC } from 'react';
import CabinetMenu from '../../components/CabinetMenu/CabinetMenu';
import { Routes, Route } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { AdminCardTable } from '../../components/AdminCardTable/AdminCardTable';
// import { usePublicProductListQuery } from '../../utils/api/publicProductApi';
import { AdminVendorsCatalog } from '../../components/AdminVendorsCatalog/AdminVendorsCatalog';
import { AdminComplaintsTable } from '../../components/AdminComplaintsTable/AdminComplaintsTable';
import { AdminAddVendor } from '../../components/AdminAddVendor/AdminAddVendor';
import { useProductListQuery } from '../../utils/api/userProductApi';
import { useComplaintListQuery } from '../../utils/api/complaintApi';
import SellerSales from '../../components/SellerSales/SellerSales';

export const Admin: FC = () => {
  // const { data } = usePublicProductListQuery({
  //   minId: 0,
  //   pageSize: '30',
  //   sort: 'NEWEST',
  // });

  const { data: publishedList, isSuccess: isPublishedListSuccess } =
    useProductListQuery(
      {
        status: 'PUBLISHED',
      },
      { refetchOnMountOrArgChange: true },
    );
  const { data: rejectedList, isSuccess: isRejectedListSuccess } =
    useProductListQuery(
      {
        status: 'REJECTED',
      },
      { refetchOnMountOrArgChange: true },
    );
  const { data: shippedList, isSuccess: isShippedListSuccess } =
    useProductListQuery(
      {
        status: 'SHIPPED',
      },
      { refetchOnMountOrArgChange: true },
    );
  const { data: complaintList, isSuccess: isComplaintListSuccess } =
    useComplaintListQuery({}, { refetchOnMountOrArgChange: true });

  if (
    isPublishedListSuccess &&
    isRejectedListSuccess &&
    isShippedListSuccess &&
    isComplaintListSuccess
  ) {
    localStorage.setItem('adminPublishedList', JSON.stringify(publishedList));
    localStorage.setItem('adminRejectedList', JSON.stringify(rejectedList));
    localStorage.setItem('adminShippedList', JSON.stringify(shippedList));
    localStorage.setItem('adminComplaintList', JSON.stringify(complaintList));
  }

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
          <Route
            path="/published"
            element={
              <AdminCardTable
                products={publishedList?.products || []}
                productStatus={'PUBLISHED'}
              />
            }
          />
          <Route
            path="/on-moderation"
            element={
              <AdminCardTable
                products={shippedList?.products || []}
                productStatus={'SHIPPED'}
              />
            }
          />
          <Route
            path="/rejected"
            element={
              <AdminCardTable
                products={rejectedList?.products || []}
                productStatus={'REJECTED'}
              />
            }
          />
          <Route path="/appeal" element={<AdminComplaintsTable />} />
          <Route path="/vendors" element={<AdminVendorsCatalog />} />
          <Route path="/add-vendor" element={<AdminAddVendor />} />
          <Route path="/add-vendor/:id" element={<AdminAddVendor />} />
          <Route path="/sales" element={<SellerSales/>} />
          {/* <Route path="/contacts" element={<h2>Контакты</h2>} /> */}
        </Routes>
      </section>
    </>
  );
};
