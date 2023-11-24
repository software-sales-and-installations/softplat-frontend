import SellerTitles from '../../components/SellerTitles/SellerTitles';
import styles from '../Personal/Personal.module.scss';
import { Routes, Route } from 'react-router-dom';
import SellerBreadcrumbs from '../../components/SellerBreadcrumbs/SellerBreadcrumbs';
import SellerProduct from '../../components/SellerProduct/SellerProduct';

const Seller: React.FC = () => {
  return (
    <section className={styles.personal}>
      <div className={styles.personal__titles}>
        <SellerBreadcrumbs />
        <SellerTitles />
      </div>
      <Routes>
        <Route path="/products" element={<SellerProduct />} />
      </Routes>
    </section>
  );
};

export default Seller;
