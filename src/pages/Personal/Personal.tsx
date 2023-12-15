import PersonalFavorites from '../../components/PersonalFavorites/PersonalFavorites';
import CabinetMenu from '../../components/CabinetMenu/CabinetMenu';
import styles from './Personal.module.scss';
import { Routes, Route } from 'react-router-dom';
import PersonalSettings from '../../components/PersonalSettings/PersonalSettings';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import PasswordSettings from '../../components/PasswordSettings/PasswordSettings';
import PersonalPurchases from '../../components/PersonalPurchases/PersonalPurchases';

const Personal: React.FC = () => {
  return (
    <>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs />
      </div>
      <section className={styles.personal}>
        <div className={styles.personal__titles}>
          <CabinetMenu mode="user" />
        </div>
        <Routes>
          <Route
            path="/purchases"
            element={
              <PersonalPurchases />
              // <h2>Мои покупки</h2>
            }
          />
          <Route
            path="/favorites"
            element={
              <PersonalFavorites />
            }
          />
          <Route
            path="/settings"
            element={
              <PersonalSettings />
            }
          />
          <Route
            path="/password"
            element={
              <PasswordSettings/>
            }
          />
        </Routes>
      </section>
    </>
  );
};

export default Personal;
