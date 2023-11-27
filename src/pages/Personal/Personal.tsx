// import PersonalFavorites from '../../components/PersonalFavorites/PersonalFavorites';
import PersonalPurchases from '../../components/PersonalPurchases/PersonalPurchases';
import CabinetMenu from '../../components/CabinetMenu/CabinetMenu';
import styles from './Personal.module.scss';
import { Routes, Route } from 'react-router-dom';
import MuiBreadcrumbs from '../../components/MuiBreadcrumbs/MuiBreadcrumbs';
import PersonalSettings from '../../components/PersonalSettings/PersonalSettings';

const Personal: React.FC = () => {
  return (
    <section className={styles.personal}>
      <div className={styles.personal__titles}>
        <MuiBreadcrumbs />
        <CabinetMenu />
      </div>
      <Routes>
        <Route path="/purchases" element={<PersonalPurchases />} />
        {/* <Route path="/favorites" element={<PersonalFavorites />} /> */}
        <Route path="/settings" element={<PersonalSettings />} />
      </Routes>
    </section>
  );
};

export default Personal;
